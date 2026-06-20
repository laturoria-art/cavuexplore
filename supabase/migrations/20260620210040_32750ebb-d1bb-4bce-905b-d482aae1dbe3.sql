
-- =========================================
-- 1. ROLES DE USUARIO
-- =========================================
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Función security definer para chequear rol sin recursión
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Los usuarios ven su propio rol"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Solo admin gestiona roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- =========================================
-- 2. PROFILES
-- =========================================
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuarios ven su propio perfil o admin ve todos"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Usuarios editan su propio perfil"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

CREATE POLICY "Usuarios crean su propio perfil"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (id = auth.uid());

-- =========================================
-- 3. TRIGGER: crear perfil + asignar admin al primer usuario
-- =========================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_count INT;
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.raw_user_meta_data->>'avatar_url'
  );

  SELECT COUNT(*) INTO user_count FROM public.user_roles;
  IF user_count = 0 THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
  ELSE
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Trigger compartido para updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================================
-- 4. CATEGORÍAS
-- =========================================
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.categories TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.categories TO authenticated;
GRANT ALL ON public.categories TO service_role;

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categorías visibles para todos"
  ON public.categories FOR SELECT
  USING (true);

CREATE POLICY "Solo admin gestiona categorías"
  ON public.categories FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================================
-- 5. AUTORES
-- =========================================
CREATE TABLE public.authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  bio TEXT,
  avatar_url TEXT,
  email TEXT,
  twitter_url TEXT,
  instagram_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.authors TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.authors TO authenticated;
GRANT ALL ON public.authors TO service_role;

ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Autores activos visibles para todos"
  ON public.authors FOR SELECT
  USING (is_active OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Solo admin gestiona autores"
  ON public.authors FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_authors_updated_at
  BEFORE UPDATE ON public.authors
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================================
-- 6. ARTÍCULOS
-- =========================================
CREATE TYPE public.article_status AS ENUM ('draft', 'published');

CREATE TABLE public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  excerpt TEXT,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  cover_image_url TEXT,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  author_id UUID REFERENCES public.authors(id) ON DELETE SET NULL,
  status public.article_status NOT NULL DEFAULT 'draft',
  is_featured BOOLEAN NOT NULL DEFAULT false,
  read_time_minutes INT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX articles_status_published_at_idx ON public.articles (status, published_at DESC);
CREATE INDEX articles_category_id_idx ON public.articles (category_id);
CREATE INDEX articles_author_id_idx ON public.articles (author_id);

GRANT SELECT ON public.articles TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.articles TO authenticated;
GRANT ALL ON public.articles TO service_role;

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artículos publicados visibles para todos"
  ON public.articles FOR SELECT
  USING (status = 'published' OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Solo admin gestiona artículos"
  ON public.articles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON public.articles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================================
-- 7. SUSCRIPTORES DEL NEWSLETTER
-- =========================================
CREATE TABLE public.subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.subscribers TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.subscribers TO authenticated;
GRANT ALL ON public.subscribers TO service_role;

ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede suscribirse"
  ON public.subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Solo admin ve suscriptores"
  ON public.subscribers FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Solo admin edita suscriptores"
  ON public.subscribers FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Solo admin borra suscriptores"
  ON public.subscribers FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_subscribers_updated_at
  BEFORE UPDATE ON public.subscribers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


-- Revocar EXECUTE público en funciones SECURITY DEFINER que son solo para triggers internos
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;

-- has_role solo necesita ser ejecutable por usuarios autenticados (las policies la usan)
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO authenticated;

-- Reforzar policy de suscripción con validación de email
DROP POLICY IF EXISTS "Cualquiera puede suscribirse" ON public.subscribers;
CREATE POLICY "Cualquiera puede suscribirse"
  ON public.subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL
    AND length(email) BETWEEN 5 AND 255
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

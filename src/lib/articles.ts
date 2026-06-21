import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ArticleSection {
  heading: string;
  content: string;
}

export interface ArticleContent {
  introduction: string;
  sections: ArticleSection[];
  conclusion: string;
}

export interface ArticleRow {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  excerpt: string | null;
  content: ArticleContent;
  cover_image_url: string | null;
  category_id: string | null;
  author_id: string | null;
  status: "draft" | "published" | "archived";
  is_featured: boolean;
  read_time_minutes: number | null;
  tags: string[];
  published_at: string | null;
  created_at: string;
  updated_at: string;
  category?: { id: string; slug: string; name: string } | null;
  author?: { id: string; name: string; bio: string | null; avatar_url: string | null; role: string | null } | null;
}

const ARTICLE_SELECT = `
  id, slug, title, subtitle, excerpt, content, cover_image_url, category_id, author_id,
  status, is_featured, read_time_minutes, tags, published_at, created_at, updated_at,
  category:categories ( id, slug, name ),
  author:authors ( id, name, bio, avatar_url, role )
`;

export function formatDateEs(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function usePublishedArticles(opts?: { categorySlug?: string; limit?: number }) {
  return useQuery({
    queryKey: ["articles", "published", opts?.categorySlug ?? null, opts?.limit ?? null],
    queryFn: async () => {
      let q = supabase
        .from("articles")
        .select(ARTICLE_SELECT)
        .eq("status", "published")
        .order("published_at", { ascending: false });
      if (opts?.limit) q = q.limit(opts.limit);
      const { data, error } = await q;
      if (error) throw error;
      let rows = (data ?? []) as unknown as ArticleRow[];
      if (opts?.categorySlug) {
        rows = rows.filter((a) => a.category?.slug === opts.categorySlug);
      }
      return rows;
    },
  });
}

export function useArticleBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["article", slug],
    enabled: !!slug,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select(ARTICLE_SELECT)
        .eq("slug", slug!)
        .maybeSingle();
      if (error) throw error;
      return data as unknown as ArticleRow | null;
    },
  });
}

export function useRelatedArticles(article: ArticleRow | null | undefined, limit = 3) {
  return useQuery({
    queryKey: ["related", article?.id, limit],
    enabled: !!article,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select(ARTICLE_SELECT)
        .eq("status", "published")
        .neq("id", article!.id)
        .order("published_at", { ascending: false })
        .limit(20);
      if (error) throw error;
      const rows = (data ?? []) as unknown as ArticleRow[];
      const sameCat = rows.filter((a) => a.category_id === article!.category_id);
      const others = rows.filter((a) => a.category_id !== article!.category_id);
      return [...sameCat, ...others].slice(0, limit);
    },
  });
}

export function useAuthors() {
  return useQuery({
    queryKey: ["authors", "active"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("authors")
        .select("*")
        .eq("is_active", true)
        .order("name");
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("sort_order");
      if (error) throw error;
      return data ?? [];
    },
  });
}

import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { formatDateEs } from "@/lib/articles";

const AdminArticles = () => {
  const qc = useQueryClient();
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["admin-articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("id, slug, title, status, is_featured, published_at, updated_at, category:categories(name), author:authors(name)")
        .order("updated_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`¿Eliminar "${title}"?`)) return;
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Artículo eliminado");
    qc.invalidateQueries({ queryKey: ["admin-articles"] });
  };

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Artículos</h1>
        <Link to="/admin/articles/new" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">
          + Nuevo
        </Link>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Cargando…</p>
      ) : articles.length === 0 ? (
        <p className="text-muted-foreground">Aún no hay artículos.</p>
      ) : (
        <div className="bg-card rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-4">Título</th>
                <th className="text-left p-4">Categoría</th>
                <th className="text-left p-4">Autor</th>
                <th className="text-left p-4">Estado</th>
                <th className="text-left p-4">Publicado</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a: any) => (
                <tr key={a.id} className="border-t border-border">
                  <td className="p-4">
                    <Link to={`/admin/articles/${a.id}`} className="font-medium hover:underline">
                      {a.title}
                    </Link>
                    {a.is_featured && <span className="ml-2 text-xs px-2 py-0.5 rounded bg-accent text-accent-foreground">★</span>}
                  </td>
                  <td className="p-4 text-muted-foreground">{a.category?.name ?? "—"}</td>
                  <td className="p-4 text-muted-foreground">{a.author?.name ?? "—"}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      a.status === "published" ? "bg-green-500/10 text-green-700 dark:text-green-400"
                      : a.status === "draft" ? "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
                      : "bg-muted text-muted-foreground"
                    }`}>{a.status}</span>
                  </td>
                  <td className="p-4 text-muted-foreground">{formatDateEs(a.published_at)}</td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleDelete(a.id, a.title)} className="text-sm text-destructive hover:underline">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminArticles;

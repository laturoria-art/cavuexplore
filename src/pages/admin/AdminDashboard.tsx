import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const AdminDashboard = () => {
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [a, aPub, au, ca, su] = await Promise.all([
        supabase.from("articles").select("*", { count: "exact", head: true }),
        supabase.from("articles").select("*", { count: "exact", head: true }).eq("status", "published"),
        supabase.from("authors").select("*", { count: "exact", head: true }),
        supabase.from("categories").select("*", { count: "exact", head: true }),
        supabase.from("subscribers").select("*", { count: "exact", head: true }).eq("is_active", true),
      ]);
      return {
        articles: a.count ?? 0,
        published: aPub.count ?? 0,
        authors: au.count ?? 0,
        categories: ca.count ?? 0,
        subscribers: su.count ?? 0,
      };
    },
  });

  const cards = [
    { label: "Artículos publicados", value: stats?.published ?? 0, total: stats?.articles, to: "/admin/articles" },
    { label: "Autores", value: stats?.authors ?? 0, to: "/admin/authors" },
    { label: "Categorías", value: stats?.categories ?? 0, to: "/admin/categories" },
    { label: "Suscriptores", value: stats?.subscribers ?? 0, to: "/admin/subscribers" },
  ];

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Panel</h1>
        <p className="text-muted-foreground">Resumen del contenido del sitio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <Link key={c.label} to={c.to} className="block p-6 rounded-2xl bg-card hover:shadow-lg transition">
            <p className="text-sm text-muted-foreground mb-1">{c.label}</p>
            <p className="text-3xl font-semibold">
              {c.value}
              {c.total !== undefined && c.total !== c.value && (
                <span className="text-sm text-muted-foreground"> / {c.total}</span>
              )}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex gap-3">
        <Link to="/admin/articles/new" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm">
          + Nuevo artículo
        </Link>
        <Link to="/admin/authors" className="px-5 py-2.5 bg-card border border-border rounded-lg text-sm">
          Gestionar autores
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;

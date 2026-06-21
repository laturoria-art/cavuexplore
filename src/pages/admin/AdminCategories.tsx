import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface CategoryForm {
  id?: string;
  slug: string;
  name: string;
  description: string;
  sort_order: number;
}

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

const AdminCategories = () => {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<CategoryForm | null>(null);

  const { data: cats = [] } = useQuery({
    queryKey: ["cats-admin"],
    queryFn: async () => (await supabase.from("categories").select("*").order("sort_order")).data ?? [],
  });

  const save = async () => {
    if (!editing) return;
    const payload = { ...editing, slug: editing.slug || slugify(editing.name) };
    delete payload.id;
    let error;
    if (editing.id) ({ error } = await supabase.from("categories").update(payload).eq("id", editing.id));
    else ({ error } = await supabase.from("categories").insert(payload));
    if (error) return toast.error(error.message);
    toast.success("Guardado");
    setEditing(null);
    qc.invalidateQueries({ queryKey: ["cats-admin"] });
  };

  const remove = async (id: string) => {
    if (!confirm("¿Eliminar categoría?")) return;
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Eliminada");
    qc.invalidateQueries({ queryKey: ["cats-admin"] });
  };

  const input = "w-full px-4 py-2.5 rounded-lg border border-input bg-background";

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Categorías</h1>
        <button onClick={() => setEditing({ slug: "", name: "", description: "", sort_order: cats.length })} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">
          + Nueva
        </button>
      </div>

      <div className="space-y-2">
        {cats.map((c: any) => (
          <div key={c.id} className="bg-card p-4 rounded-xl flex items-center gap-4">
            <div className="flex-1">
              <p className="font-medium">{c.name} <span className="text-xs text-muted-foreground">/{c.slug}</span></p>
              {c.description && <p className="text-sm text-muted-foreground">{c.description}</p>}
            </div>
            <button onClick={() => setEditing(c)} className="text-sm text-primary">Editar</button>
            <button onClick={() => remove(c.id)} className="text-sm text-destructive">Eliminar</button>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setEditing(null)}>
          <div className="bg-card p-6 rounded-2xl max-w-md w-full space-y-3" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold">{editing.id ? "Editar" : "Nueva"} categoría</h2>
            <input placeholder="Nombre *" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} className={input} />
            <input placeholder="Slug (auto)" value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} className={input} />
            <textarea placeholder="Descripción" value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} rows={2} className={input} />
            <input type="number" placeholder="Orden" value={editing.sort_order} onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value || "0") })} className={input} />
            <div className="flex gap-2 justify-end pt-2">
              <button onClick={() => setEditing(null)} className="px-4 py-2 border border-border rounded-lg text-sm">Cancelar</button>
              <button onClick={save} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategories;

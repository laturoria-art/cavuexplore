import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AuthorForm {
  id?: string;
  name: string; role: string; bio: string; avatar_url: string;
  email: string; twitter_url: string; instagram_url: string; is_active: boolean;
}

const empty: AuthorForm = { name: "", role: "", bio: "", avatar_url: "", email: "", twitter_url: "", instagram_url: "", is_active: true };

const AdminAuthors = () => {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<AuthorForm | null>(null);

  const { data: authors = [] } = useQuery({
    queryKey: ["authors-admin"],
    queryFn: async () => (await supabase.from("authors").select("*").order("name")).data ?? [],
  });

  const save = async () => {
    if (!editing) return;
    const payload = { ...editing };
    delete payload.id;
    let error;
    if (editing.id) ({ error } = await supabase.from("authors").update(payload).eq("id", editing.id));
    else ({ error } = await supabase.from("authors").insert(payload));
    if (error) return toast.error(error.message);
    toast.success("Guardado");
    setEditing(null);
    qc.invalidateQueries({ queryKey: ["authors-admin"] });
  };

  const remove = async (id: string) => {
    if (!confirm("¿Eliminar autor?")) return;
    const { error } = await supabase.from("authors").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Eliminado");
    qc.invalidateQueries({ queryKey: ["authors-admin"] });
  };

  const input = "w-full px-4 py-2.5 rounded-lg border border-input bg-background";

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Autores</h1>
        <button onClick={() => setEditing(empty)} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">
          + Nuevo autor
        </button>
      </div>

      <div className="space-y-3">
        {authors.map((a: any) => (
          <div key={a.id} className="bg-card p-4 rounded-xl flex items-center gap-4">
            {a.avatar_url && <img src={a.avatar_url} alt={a.name} className="w-12 h-12 rounded-full object-cover" />}
            <div className="flex-1">
              <p className="font-medium">{a.name}</p>
              <p className="text-sm text-muted-foreground">{a.role}</p>
            </div>
            {!a.is_active && <span className="text-xs px-2 py-1 rounded bg-muted">Inactivo</span>}
            <button onClick={() => setEditing(a)} className="text-sm text-primary">Editar</button>
            <button onClick={() => remove(a.id)} className="text-sm text-destructive">Eliminar</button>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setEditing(null)}>
          <div className="bg-card p-6 rounded-2xl max-w-lg w-full space-y-3 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold">{editing.id ? "Editar" : "Nuevo"} autor</h2>
            <input placeholder="Nombre *" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} className={input} />
            <input placeholder="Rol" value={editing.role} onChange={(e) => setEditing({ ...editing, role: e.target.value })} className={input} />
            <textarea placeholder="Bio" value={editing.bio} onChange={(e) => setEditing({ ...editing, bio: e.target.value })} rows={3} className={input} />
            <input placeholder="URL del avatar" value={editing.avatar_url} onChange={(e) => setEditing({ ...editing, avatar_url: e.target.value })} className={input} />
            <input placeholder="Email" value={editing.email} onChange={(e) => setEditing({ ...editing, email: e.target.value })} className={input} />
            <input placeholder="Twitter URL" value={editing.twitter_url} onChange={(e) => setEditing({ ...editing, twitter_url: e.target.value })} className={input} />
            <input placeholder="Instagram URL" value={editing.instagram_url} onChange={(e) => setEditing({ ...editing, instagram_url: e.target.value })} className={input} />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={editing.is_active} onChange={(e) => setEditing({ ...editing, is_active: e.target.checked })} />
              Activo (visible en el sitio)
            </label>
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

export default AdminAuthors;

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { formatDateEs } from "@/lib/articles";

const AdminSubscribers = () => {
  const qc = useQueryClient();
  const { data: subs = [] } = useQuery({
    queryKey: ["subs-admin"],
    queryFn: async () => (await supabase.from("subscribers").select("*").order("created_at", { ascending: false })).data ?? [],
  });

  const toggle = async (id: string, current: boolean) => {
    const { error } = await supabase.from("subscribers").update({ is_active: !current }).eq("id", id);
    if (error) return toast.error(error.message);
    qc.invalidateQueries({ queryKey: ["subs-admin"] });
  };

  const remove = async (id: string) => {
    if (!confirm("¿Eliminar suscriptor?")) return;
    const { error } = await supabase.from("subscribers").delete().eq("id", id);
    if (error) return toast.error(error.message);
    qc.invalidateQueries({ queryKey: ["subs-admin"] });
  };

  const exportCsv = () => {
    const rows = [["email", "is_active", "source", "created_at"], ...subs.map((s: any) => [s.email, s.is_active, s.source ?? "", s.created_at])];
    const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `subscribers-${Date.now()}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Suscriptores ({subs.length})</h1>
        <button onClick={exportCsv} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">
          Exportar CSV
        </button>
      </div>

      <div className="bg-card rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Origen</th>
              <th className="text-left p-4">Fecha</th>
              <th className="text-left p-4">Activo</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {subs.map((s: any) => (
              <tr key={s.id} className="border-t border-border">
                <td className="p-4">{s.email}</td>
                <td className="p-4 text-muted-foreground">{s.source ?? "—"}</td>
                <td className="p-4 text-muted-foreground">{formatDateEs(s.created_at)}</td>
                <td className="p-4">
                  <button onClick={() => toggle(s.id, s.is_active)} className={`text-xs px-2 py-1 rounded ${s.is_active ? "bg-green-500/10 text-green-700 dark:text-green-400" : "bg-muted text-muted-foreground"}`}>
                    {s.is_active ? "Sí" : "No"}
                  </button>
                </td>
                <td className="p-4 text-right">
                  <button onClick={() => remove(s.id)} className="text-sm text-destructive">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSubscribers;

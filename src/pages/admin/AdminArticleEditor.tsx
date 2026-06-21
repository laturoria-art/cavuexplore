import { useEffect, useState, FormEvent } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArticleContent } from "@/lib/articles";

const slugify = (s: string) =>
  s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim().replace(/\s+/g, "-").slice(0, 80);

interface FormState {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  cover_image_url: string;
  category_id: string;
  author_id: string;
  status: "draft" | "published";
  is_featured: boolean;
  read_time_minutes: string;
  tags: string;
  published_at: string;
  introduction: string;
  conclusion: string;
  sections: { heading: string; content: string }[];
}

const empty: FormState = {
  slug: "", title: "", subtitle: "", excerpt: "", cover_image_url: "",
  category_id: "", author_id: "", status: "draft", is_featured: false,
  read_time_minutes: "", tags: "", published_at: "",
  introduction: "", conclusion: "", sections: [{ heading: "", content: "" }],
};

const AdminArticleEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isNew = id === "new";
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(empty);
  const [saving, setSaving] = useState(false);

  const { data: cats = [] } = useQuery({
    queryKey: ["cats-all"],
    queryFn: async () => (await supabase.from("categories").select("*").order("sort_order")).data ?? [],
  });
  const { data: authors = [] } = useQuery({
    queryKey: ["authors-all"],
    queryFn: async () => (await supabase.from("authors").select("*").order("name")).data ?? [],
  });

  useEffect(() => {
    if (isNew || !id) return;
    (async () => {
      const { data, error } = await supabase.from("articles").select("*").eq("id", id).maybeSingle();
      if (error || !data) { toast.error("No se pudo cargar"); return; }
      const c = (data.content as unknown as ArticleContent) || { introduction: "", sections: [], conclusion: "" };
      setForm({
        slug: data.slug, title: data.title, subtitle: data.subtitle ?? "",
        excerpt: data.excerpt ?? "", cover_image_url: data.cover_image_url ?? "",
        category_id: data.category_id ?? "", author_id: data.author_id ?? "",
        status: data.status, is_featured: data.is_featured,
        read_time_minutes: data.read_time_minutes?.toString() ?? "",
        tags: (data.tags ?? []).join(", "),
        published_at: data.published_at ? data.published_at.slice(0, 16) : "",
        introduction: c.introduction ?? "",
        conclusion: c.conclusion ?? "",
        sections: c.sections?.length ? c.sections : [{ heading: "", content: "" }],
      });
    })();
  }, [id, isNew]);

  const updateField = <K extends keyof FormState>(k: K, v: FormState[K]) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const content: ArticleContent = {
      introduction: form.introduction,
      sections: form.sections.filter((s) => s.heading || s.content),
      conclusion: form.conclusion,
    };

    const payload = {
      slug: form.slug || slugify(form.title),
      title: form.title,
      subtitle: form.subtitle || null,
      excerpt: form.excerpt || null,
      cover_image_url: form.cover_image_url || null,
      category_id: form.category_id || null,
      author_id: form.author_id || null,
      status: form.status,
      is_featured: form.is_featured,
      read_time_minutes: form.read_time_minutes ? parseInt(form.read_time_minutes) : null,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      published_at:
        form.status === "published"
          ? (form.published_at ? new Date(form.published_at).toISOString() : new Date().toISOString())
          : null,
      content: content as any,
    };

    if (isNew) {
      const { data, error } = await supabase.from("articles").insert(payload).select("id").maybeSingle();
      setSaving(false);
      if (error) return toast.error(error.message);
      toast.success("Artículo creado");
      navigate(`/admin/articles/${data!.id}`);
    } else {
      const { error } = await supabase.from("articles").update(payload).eq("id", id!);
      setSaving(false);
      if (error) return toast.error(error.message);
      toast.success("Artículo guardado");
    }
  };

  const addSection = () => setForm((f) => ({ ...f, sections: [...f.sections, { heading: "", content: "" }] }));
  const removeSection = (i: number) => setForm((f) => ({ ...f, sections: f.sections.filter((_, idx) => idx !== i) }));
  const updateSection = (i: number, k: "heading" | "content", v: string) =>
    setForm((f) => ({ ...f, sections: f.sections.map((s, idx) => (idx === i ? { ...s, [k]: v } : s)) }));

  const input = "w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/admin/articles" className="text-sm text-muted-foreground hover:underline">← Artículos</Link>
          <h1 className="text-3xl font-semibold mt-2">{isNew ? "Nuevo artículo" : "Editar artículo"}</h1>
        </div>
        <button type="submit" disabled={saving} className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg disabled:opacity-60">
          {saving ? "Guardando…" : "Guardar"}
        </button>
      </div>

      <div className="bg-card p-6 rounded-2xl space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Título *</label>
          <input required value={form.title} onChange={(e) => updateField("title", e.target.value)}
            onBlur={() => !form.slug && updateField("slug", slugify(form.title))} className={input} />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Slug *</label>
            <input required value={form.slug} onChange={(e) => updateField("slug", e.target.value)} className={input} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">URL de portada</label>
            <input value={form.cover_image_url} onChange={(e) => updateField("cover_image_url", e.target.value)} placeholder="https://…" className={input} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Subtítulo</label>
          <input value={form.subtitle} onChange={(e) => updateField("subtitle", e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Extracto</label>
          <textarea value={form.excerpt} onChange={(e) => updateField("excerpt", e.target.value)} rows={2} className={input} />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Categoría</label>
            <select value={form.category_id} onChange={(e) => updateField("category_id", e.target.value)} className={input}>
              <option value="">—</option>
              {cats.map((c: any) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Autor</label>
            <select value={form.author_id} onChange={(e) => updateField("author_id", e.target.value)} className={input}>
              <option value="">—</option>
              {authors.map((a: any) => <option key={a.id} value={a.id}>{a.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Min. lectura</label>
            <input type="number" min="1" value={form.read_time_minutes} onChange={(e) => updateField("read_time_minutes", e.target.value)} className={input} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Tags (separados por coma)</label>
          <input value={form.tags} onChange={(e) => updateField("tags", e.target.value)} className={input} />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Estado</label>
            <select value={form.status} onChange={(e) => updateField("status", e.target.value as "draft" | "published")} className={input}>
              <option value="draft">Borrador</option>
              <option value="published">Publicado</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Fecha publicación</label>
            <input type="datetime-local" value={form.published_at} onChange={(e) => updateField("published_at", e.target.value)} className={input} />
          </div>
          <label className="flex items-center gap-2 self-end pb-2">
            <input type="checkbox" checked={form.is_featured} onChange={(e) => updateField("is_featured", e.target.checked)} />
            <span className="text-sm">Destacado</span>
          </label>
        </div>
      </div>

      <div className="bg-card p-6 rounded-2xl space-y-4">
        <h2 className="text-xl font-semibold">Contenido</h2>
        <div>
          <label className="block text-sm font-medium mb-2">Introducción</label>
          <textarea value={form.introduction} onChange={(e) => updateField("introduction", e.target.value)} rows={4} className={input} />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Secciones</h3>
            <button type="button" onClick={addSection} className="text-sm text-primary">+ Añadir sección</button>
          </div>
          {form.sections.map((s, i) => (
            <div key={i} className="bg-background p-4 rounded-lg space-y-3 border border-border">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Sección {i + 1}</span>
                {form.sections.length > 1 && (
                  <button type="button" onClick={() => removeSection(i)} className="text-xs text-destructive">Quitar</button>
                )}
              </div>
              <input placeholder="Título" value={s.heading} onChange={(e) => updateSection(i, "heading", e.target.value)} className={input} />
              <textarea placeholder="Contenido" value={s.content} onChange={(e) => updateSection(i, "content", e.target.value)} rows={5} className={input} />
            </div>
          ))}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Conclusión</label>
          <textarea value={form.conclusion} onChange={(e) => updateField("conclusion", e.target.value)} rows={4} className={input} />
        </div>
      </div>
    </form>
  );
};

export default AdminArticleEditor;

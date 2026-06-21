import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";
import { useArticleBySlug, useRelatedArticles, formatDateEs } from "@/lib/articles";
import { Facebook, Twitter, Linkedin, Link2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading } = useArticleBySlug(slug);
  const { data: related = [] } = useRelatedArticles(article ?? null);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} — Perspective`;
    }
  }, [article]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <p className="text-center text-muted-foreground py-24">Cargando artículo…</p>
      </div>
    );
  }

  if (!article) return <Navigate to="/404" replace />;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("¡Enlace copiado!");
  };

  const getCategoryClass = (cat: string) => {
    const normalized = cat.toLowerCase();
    if (normalized.includes("financ")) return "tag-financing";
    if (normalized.includes("estilo")) return "tag-lifestyle";
    if (normalized.includes("comunidad")) return "tag-community";
    if (normalized.includes("bienestar")) return "tag-wellness";
    if (normalized.includes("viaje")) return "tag-travel";
    if (normalized.includes("creativ")) return "tag-creativity";
    if (normalized.includes("crecimiento")) return "tag-growth";
    return "tag-lifestyle";
  };

  const categoryName = article.category?.name ?? "";

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver a los artículos
          </Link>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12">
          <img src={article.cover_image_url ?? ""} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          <div className="mb-12 animate-slide-up">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              {categoryName && (
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryClass(categoryName)}`}>
                  {categoryName}
                </span>
              )}
              <span className="text-sm text-muted-foreground">{formatDateEs(article.published_at)}</span>
              {article.read_time_minutes && <>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{article.read_time_minutes} min de lectura</span>
              </>}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">{article.title}</h1>
            {article.subtitle && <p className="text-xl text-muted-foreground mb-8">{article.subtitle}</p>}

            <div className="flex items-center justify-between border-t border-b border-border py-6">
              {article.author && (
                <div className="flex items-center gap-4">
                  {article.author.avatar_url && (
                    <img src={article.author.avatar_url} alt={article.author.name} className="w-14 h-14 rounded-full object-cover" />
                  )}
                  <div>
                    <p className="font-semibold">{article.author.name}</p>
                    {article.author.bio && <p className="text-sm text-muted-foreground">{article.author.bio}</p>}
                  </div>
                </div>
              )}
              <div className="hidden md:flex items-center gap-2">
                <button onClick={handleCopyLink} className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Copiar enlace">
                  <Link2 className="w-4 h-4" />
                </button>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-16 animate-slide-up stagger-2">
            {article.content.introduction && (
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">{article.content.introduction}</p>
            )}
            {(article.content.sections ?? []).map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-3xl mb-4">{section.heading}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">{section.content}</p>
              </div>
            ))}
            {article.content.conclusion && (
              <div className="mt-12 p-6 rounded-2xl bg-muted border-l-4 border-accent">
                <p className="text-lg leading-relaxed italic text-foreground">{article.content.conclusion}</p>
              </div>
            )}
          </div>

          {article.tags?.length > 0 && (
            <div className="mb-12 pb-12 border-b border-border">
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full text-sm bg-muted text-foreground">#{tag}</span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-16 rounded-2xl bg-card p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl mb-4">¿Te ha gustado este artículo?</h3>
            <p className="text-muted-foreground mb-6">Suscríbete y recibe más ideas como esta directamente en tu correo.</p>
            <NewsletterForm source={`article:${article.slug}`} />
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-muted py-16 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl mb-8 animate-slide-up">También te puede interesar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r, i) => (
                  <div key={r.id} className={`animate-slide-up stagger-${Math.min(i + 1, 3)}`}>
                    <ArticleCard
                      slug={r.slug}
                      title={r.title}
                      category={r.category?.name ?? ""}
                      date={formatDateEs(r.published_at)}
                      image={r.cover_image_url ?? ""}
                      size="small"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Article;

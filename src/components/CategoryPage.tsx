import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { usePublishedArticles, formatDateEs } from "@/lib/articles";

interface Props {
  categorySlug: string;
  title: string;
  intro: string;
  ctaTitle: string;
  ctaParagraphs: string[];
}

const CategoryPage = ({ categorySlug, title, intro, ctaTitle, ctaParagraphs }: Props) => {
  const { data: articles = [], isLoading } = usePublishedArticles({ categorySlug });

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            {intro}
          </p>
        </div>

        <section>
          {isLoading ? (
            <p className="text-center text-muted-foreground py-12">Cargando artículos…</p>
          ) : articles.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              Aún no hay artículos publicados en esta categoría.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a, i) => (
                <div key={a.id} className={`animate-slide-up stagger-${Math.min(i + 2, 6)}`}>
                  <ArticleCard
                    slug={a.slug}
                    title={a.title}
                    category={a.category?.name ?? ""}
                    date={formatDateEs(a.published_at)}
                    image={a.cover_image_url ?? ""}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-6">{ctaTitle}</h2>
            <div className="space-y-4 text-muted-foreground">
              {ctaParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CategoryPage;

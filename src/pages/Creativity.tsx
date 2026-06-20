import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Creativity = () => {
  const creativityArticles = articles.filter((article) =>
    article.category.toLowerCase().includes("creativ")
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Creatividad y expresión
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Despierta tu potencial creativo y explora el arte de la expresión auténtica.
            Desde cómo superar bloqueos hasta cómo construir prácticas creativas sostenibles,
            encuentra ideas que nutran tu camino artístico.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativityArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-6">Cultivando el espíritu creativo</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                La creatividad no está reservada a las y los artistas: es una capacidad humana fundamental que enriquece
                cada aspecto de la vida. Escribir, diseñar, resolver problemas o reinventar tu rutina diaria, todo abre
                puertas a la innovación y la plenitud.
              </p>
              <p>
                Exploramos las prácticas, mentalidades y herramientas que ayudan a personas creativas de toda clase a
                mantenerse inspiradas, superar obstáculos y construir vidas creativas sostenibles. Desde encontrar tu voz
                única hasta sortear los retos prácticos del trabajo creativo, estamos aquí para acompañarte.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Creativity;

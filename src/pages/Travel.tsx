import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Travel = () => {
  const travelArticles = articles.filter((article) =>
    article.category.toLowerCase().includes("viaje")
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Viajes y exploración
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Recorre destinos inspiradores, descubre la riqueza cultural de cada lugar y aprende a viajar de forma consciente.
            Explora el mundo con intención, curiosidad y respeto por las comunidades locales y el entorno.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-6">Nuestra filosofía de viaje</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Viajar es mucho más que visitar lugares nuevos: es abrirnos a otras perspectivas, culturas y formas de estar
                en el mundo. Creemos en el viaje pausado e intencional, que prioriza las conexiones reales por encima de
                tachar destinos de una lista.
              </p>
              <p>
                Tanto si exploras tu propia ciudad como si te aventuras lejos, compartimos historias e ideas que inspiran
                exploración consciente, prácticas sostenibles e intercambio cultural auténtico. Acompáñanos a descubrir
                que muchas veces el propio camino es el destino más valioso.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Travel;

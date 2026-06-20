import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Growth = () => {
  const growthArticles = articles.filter((article) =>
    article.category.toLowerCase().includes("crecimiento")
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Crecimiento personal
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Embárcate en un viaje de autodescubrimiento y mejora continua.
            Explora ideas, prácticas y perspectivas que apoyan tu evolución hacia tu mejor versión.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-6">El camino del crecimiento</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                El crecimiento personal no busca la perfección: busca el progreso, la conciencia y el coraje de evolucionar.
                Es la práctica diaria de alinearnos con nuestros valores, ser más amables con nosotros mismos y con los demás,
                y vivir de forma más intencional.
              </p>
              <p>
                A través de reflexión, estrategias prácticas e historias inspiradoras, exploramos qué significa crecer
                como persona. Desde construir resiliencia hasta soltar lo que ya no nos sirve, cada paso importa.
                Acompáñanos en el trabajo hermoso y desafiante de convertirnos en quienes queremos ser.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Growth;

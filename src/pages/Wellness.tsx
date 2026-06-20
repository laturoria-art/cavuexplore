import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Wellness = () => {
  const wellnessArticles = articles.filter((article) =>
    article.category.toLowerCase().includes("bienestar")
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Bienestar y autocuidado
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Descubre prácticas, ideas y estrategias para cuidar tu bienestar físico, mental y emocional.
            De las rutinas conscientes a los enfoques holísticos de salud, explora maneras de crear
            equilibrio y vitalidad en tu día a día.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-6">Por qué importa el bienestar</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                El bienestar no es solo salud física: es crear armonía entre el cuerpo, la mente y el espíritu.
                En un mundo acelerado, dedicar tiempo a cuidarnos no es un lujo, es algo esencial para vivir mejor.
              </p>
              <p>
                A través de prácticas conscientes de autocuidado podemos construir resiliencia, mejorar nuestras
                relaciones, aumentar nuestra productividad y, en definitiva, vivir vidas más plenas. Sea con nutrición,
                movimiento, meditación o simplemente aprendiendo a descansar, cada pequeño paso cuenta.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Wellness;

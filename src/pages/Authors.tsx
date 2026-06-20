import Header from "@/components/Header";
import { Mail, Instagram, Twitter } from "lucide-react";

const Authors = () => {
  const authors = [
    {
      name: "Emma Thompson",
      role: "Editora de bienestar",
      bio: "Emma es coach de bienestar y nutricionista con más de 10 años ayudando a las personas a crear hábitos de autocuidado sostenibles. Cree en enfoques holísticos que honran tanto el cuerpo como la mente.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      articles: 24,
    },
    {
      name: "Marcus Chen",
      role: "Cronista de viajes",
      bio: "Tras visitar más de 60 países, Marcus se especializa en viajes pausados e inmersión cultural. Su escritura explora cómo viajar puede ser transformador y sostenible, priorizando las conexiones reales por encima de las listas turísticas.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      articles: 31,
    },
    {
      name: "Sofía Rodríguez",
      role: "Columnista de creatividad",
      bio: "Sofía es artista multidisciplinar y consultora creativa que acompaña a personas y equipos a desbloquear su potencial. Le apasiona hacer la creatividad accesible para todo el mundo, no solo para quienes se consideran «artistas».",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      articles: 19,
    },
    {
      name: "David Kim",
      role: "Autor de crecimiento personal",
      bio: "David combina psicología, filosofía y experiencia personal para explorar qué significa vivir con intención. Su enfoque del crecimiento prioriza el progreso por encima de la perfección.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      articles: 27,
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Conoce a nuestras autoras y autores
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Las voces detrás de Perspective: escritores y exploradoras con experiencia que aportan miradas diversas
            e ideas genuinas a cada artículo.
          </p>
        </div>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {authors.map((author, index) => (
            <div key={author.name} className={`rounded-2xl bg-card p-8 hover:shadow-xl transition-all duration-300 animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
              <div className="flex items-start gap-6 mb-6">
                <img src={author.image} alt={author.name} className="w-24 h-24 rounded-full object-cover" />
                <div className="flex-1">
                  <h3 className="text-2xl mb-1">{author.name}</h3>
                  <p className="text-accent font-medium mb-3">{author.role}</p>
                  <p className="text-sm text-muted-foreground">{author.articles} artículos publicados</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{author.bio}</p>
              <div className="flex items-center gap-3">
                <a href="#email" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#twitter" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#instagram" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="text-center py-12 rounded-2xl bg-muted">
          <h2 className="text-3xl mb-4">¿Quieres colaborar?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Siempre buscamos nuevas voces para sumar a la comunidad. Si quieres compartir ideas sobre bienestar,
            viajes, creatividad o crecimiento personal, nos encantaría leerte.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            Escríbenos
          </a>
        </section>
      </main>
    </div>
  );
};

export default Authors;

import Header from "@/components/Header";
import { Mail, Instagram, Twitter } from "lucide-react";
import { useAuthors } from "@/lib/articles";

const Authors = () => {
  const { data: authors = [], isLoading } = useAuthors();

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

        {isLoading ? (
          <p className="text-center text-muted-foreground py-12">Cargando…</p>
        ) : (
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            {authors.map((author, index) => (
              <div key={author.id} className={`rounded-2xl bg-card p-8 hover:shadow-xl transition-all duration-300 animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <div className="flex items-start gap-6 mb-6">
                  {author.avatar_url && (
                    <img src={author.avatar_url} alt={author.name} className="w-24 h-24 rounded-full object-cover" />
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl mb-1">{author.name}</h3>
                    {author.role && <p className="text-accent font-medium mb-3">{author.role}</p>}
                  </div>
                </div>
                {author.bio && <p className="text-muted-foreground mb-6 leading-relaxed">{author.bio}</p>}
                <div className="flex items-center gap-3">
                  {author.email && (
                    <a href={`mailto:${author.email}`} className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Email">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  {author.twitter_url && (
                    <a href={author.twitter_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Twitter">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {author.instagram_url && (
                    <a href={author.instagram_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Instagram">
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}

        <section className="text-center py-12 rounded-2xl bg-muted">
          <h2 className="text-3xl mb-4">¿Quieres colaborar?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Siempre buscamos nuevas voces para sumar a la comunidad.
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

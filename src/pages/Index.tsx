import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { articles } from "@/data/articles";

const Index = () => {
  const featuredArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />

        <IntroSection />

        <section id="articles" className="py-12">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl tracking-tight">Artículos destacados</h2>
            <a href="#all" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-muted/60">
              Ver todos →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ArticleCard {...article} size="small" />
              </div>
            ))}
          </div>
        </section>

        <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl tracking-tight">Mantente inspirado.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Suscríbete y recibe nuestros últimos artículos e ideas directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <button className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all">
                Suscribirme
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="mb-4">Explorar</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/wellness" className="hover:text-accent transition-colors">Bienestar</Link></li>
                <li><Link to="/travel" className="hover:text-accent transition-colors">Viajes</Link></li>
                <li><Link to="/creativity" className="hover:text-accent transition-colors">Creatividad</Link></li>
                <li><Link to="/growth" className="hover:text-accent transition-colors">Crecimiento</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Sobre nosotros</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-accent transition-colors">Nuestra historia</Link></li>
                <li><Link to="/authors" className="hover:text-accent transition-colors">Autores</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/style-guide" className="hover:text-accent transition-colors">Guía de estilo</Link></li>
                <li><a href="#newsletter" className="hover:text-accent transition-colors">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-accent transition-colors">Política de privacidad</Link></li>
                <li><Link to="/terms" className="hover:text-accent transition-colors">Términos de servicio</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 1997-2026 PCVEN, C.A. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

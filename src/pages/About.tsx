import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Sobre Perspective
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Un espacio para explorar ideas, encontrar inspiración y descubrir nuevas formas de ver el mundo.
          </p>
        </div>

        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl text-foreground mb-6">Nuestra historia</h2>
          <p>
            Perspective nació de una pregunta simple: ¿y si creáramos un espacio donde las ideas con fondo, las historias
            con sentido y la sabiduría práctica se encuentren para enriquecer el día a día?
          </p>
          <p>
            En un mundo saturado de información, sentimos la necesidad de algo distinto: una publicación que prioriza la
            profundidad sobre la velocidad, la calidad sobre la cantidad, y la conexión auténtica sobre el contenido viral.
            Perspective es nuestra respuesta a esa necesidad.
          </p>
          <p>
            Exploramos temas que importan: prácticas de bienestar que funcionan de verdad, viajes que transforman,
            proyectos creativos que dan alegría y estrategias de crecimiento personal que generan cambios duraderos.
            Nuestro enfoque se apoya en la curiosidad, en la investigación y en la experiencia vivida.
          </p>
        </section>

        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl mb-6">Nuestra misión</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Creemos que la forma en que vemos el mundo moldea cómo lo vivimos. Perspective se dedica a ofrecer miradas
              nuevas, ideas prácticas e historias inspiradoras que ayudan a nuestras lectoras y lectores a:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start"><span className="mr-3 mt-1">•</span><span>Cultivar estilos de vida conscientes y equilibrados que prioricen el bienestar</span></li>
              <li className="flex items-start"><span className="mr-3 mt-1">•</span><span>Explorar el mundo con curiosidad y respeto</span></li>
              <li className="flex items-start"><span className="mr-3 mt-1">•</span><span>Expresarse con autenticidad a través de proyectos creativos</span></li>
              <li className="flex items-start"><span className="mr-3 mt-1">•</span><span>Abrazar el crecimiento personal como un camino para toda la vida</span></li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-8">Nuestros valores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl mb-3">Autenticidad</h3>
              <p className="text-muted-foreground">Compartimos experiencias reales, reflexiones honestas e ideas genuinas, no perfección cuidada al milímetro.</p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl mb-3">Cuidado</h3>
              <p className="text-muted-foreground">Cada artículo se investiga con esmero, se escribe con atención y se piensa para aportar valor real.</p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl mb-3">Inclusión</h3>
              <p className="text-muted-foreground">Damos la bienvenida a perspectivas diversas y creemos que cada trayectoria merece respeto y representación.</p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl mb-3">Sostenibilidad</h3>
              <p className="text-muted-foreground">Promovemos prácticas sostenibles para las personas, las comunidades y el planeta.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl mb-4">Únete a nuestra comunidad</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Suscríbete para recibir nuestros últimos artículos, ideas e inspiración directamente en tu correo.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <Mail className="mr-2 h-4 w-4" />
            Suscribirme
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;

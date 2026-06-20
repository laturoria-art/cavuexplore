import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">Guía de estilo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Una muestra de nuestro sistema de diseño, tipografía y patrones de componentes.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl mb-8">Tipografía</h2>
          <div className="space-y-6">
            <div><h1 className="text-5xl mb-2">Encabezado 1</h1><p className="text-sm text-muted-foreground">Fuente: Merriweather Bold, 3rem</p></div>
            <div><h2 className="text-4xl mb-2">Encabezado 2</h2><p className="text-sm text-muted-foreground">Fuente: Merriweather Bold, 2.25rem</p></div>
            <div><h3 className="text-3xl mb-2">Encabezado 3</h3><p className="text-sm text-muted-foreground">Fuente: Merriweather Bold, 1.875rem</p></div>
            <div><h4 className="text-2xl mb-2">Encabezado 4</h4><p className="text-sm text-muted-foreground">Fuente: Merriweather Bold, 1.5rem</p></div>
            <div><p className="text-lg mb-2">Cuerpo grande — texto de párrafo en un tamaño mayor para destacar o introducir contenido.</p><p className="text-sm text-muted-foreground">Fuente: Inter Regular, 1.125rem</p></div>
            <div><p className="mb-2">Cuerpo regular — texto estándar usado en todo el sitio para una lectura cómoda.</p><p className="text-sm text-muted-foreground">Fuente: Inter Regular, 1rem</p></div>
            <div><p className="text-sm mb-2">Cuerpo pequeño — para pies de foto, metadatos e información complementaria.</p><p className="text-sm text-muted-foreground">Fuente: Inter Regular, 0.875rem</p></div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-8">Paleta de colores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2"><div className="h-24 rounded-lg bg-background border border-border"></div><p className="text-sm font-medium">Fondo</p></div>
            <div className="space-y-2"><div className="h-24 rounded-lg bg-foreground"></div><p className="text-sm font-medium">Primer plano</p></div>
            <div className="space-y-2"><div className="h-24 rounded-lg bg-primary"></div><p className="text-sm font-medium">Primario</p></div>
            <div className="space-y-2"><div className="h-24 rounded-lg bg-secondary"></div><p className="text-sm font-medium">Secundario</p></div>
            <div className="space-y-2"><div className="h-24 rounded-lg bg-accent"></div><p className="text-sm font-medium">Acento</p></div>
            <div className="space-y-2"><div className="h-24 rounded-lg bg-muted"></div><p className="text-sm font-medium">Atenuado</p></div>
            <div className="space-y-2"><div className="h-24 rounded-lg bg-card border border-border"></div><p className="text-sm font-medium">Tarjeta</p></div>
            <div className="space-y-2"><div className="h-24 rounded-lg bg-destructive"></div><p className="text-sm font-medium">Destructivo</p></div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-8">Botones</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">Botón primario</Button>
            <Button variant="secondary" className="rounded-full">Botón secundario</Button>
            <Button variant="outline" className="rounded-full">Botón con contorno</Button>
            <Button variant="ghost">Botón fantasma</Button>
            <Button variant="destructive" className="rounded-full">Botón destructivo</Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-8">Etiquetas de categoría</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-wellness">Bienestar</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-travel">Viajes</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-creativity">Creatividad</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-growth">Crecimiento</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-lifestyle">Estilo de vida</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-community">Comunidad</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-financing">Finanzas</span>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-8">Tarjetas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card p-6 border border-border">
              <h3 className="text-xl mb-3">Título de tarjeta</h3>
              <p className="text-muted-foreground">Componente de tarjeta estándar para agrupar contenido e información relacionada.</p>
            </div>
            <div className="rounded-2xl bg-muted p-6">
              <h3 className="text-xl mb-3">Tarjeta atenuada</h3>
              <p className="text-muted-foreground">Variante con fondo atenuado para énfasis sutil o secciones secundarias.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-8">Escala de espaciado</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4"><div className="w-16 h-4 bg-primary rounded"></div><span className="text-sm">1rem (16px) — pequeño</span></div>
            <div className="flex items-center gap-4"><div className="w-24 h-4 bg-primary rounded"></div><span className="text-sm">1.5rem (24px) — medio</span></div>
            <div className="flex items-center gap-4"><div className="w-32 h-4 bg-primary rounded"></div><span className="text-sm">2rem (32px) — grande</span></div>
            <div className="flex items-center gap-4"><div className="w-48 h-4 bg-primary rounded"></div><span className="text-sm">3rem (48px) — extra grande</span></div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-8">Radio de borde</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><div className="w-full h-24 bg-primary rounded-sm mb-2"></div><p className="text-sm">Pequeño (0.25rem)</p></div>
            <div className="text-center"><div className="w-full h-24 bg-primary rounded-md mb-2"></div><p className="text-sm">Medio (0.5rem)</p></div>
            <div className="text-center"><div className="w-full h-24 bg-primary rounded-lg mb-2"></div><p className="text-sm">Grande (0.75rem)</p></div>
            <div className="text-center"><div className="w-full h-24 bg-primary rounded-2xl mb-2"></div><p className="text-sm">Extra grande (1rem)</p></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StyleGuide;

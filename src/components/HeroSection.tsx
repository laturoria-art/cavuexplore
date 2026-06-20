import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80"
            alt="Imagen principal"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight animate-slide-down">
              Un viaje por todos los matices de la vida
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              Bienvenido al blog de Perspective: un espacio de reflexión, inspiración y descubrimiento.
              Aquí las palabras iluminan caminos llenos de significado y las ideas desentrañan los misterios de lo cotidiano.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto">
              Únete ahora
            </Button>

            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/carlos6684505" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="Facebook de Carlos Vas">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/carlos6684505" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.threads.net/@carlos6684505" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="Threads">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.096 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.166 1.432 1.781 3.632 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.467-1.28 3.322-.885 1.149-2.13 1.759-3.608 1.784-1.135.02-2.123-.389-2.84-1.169-.785-.855-1.193-2.041-1.194-3.43 0-1.495.42-2.773 1.206-3.684.895-1.04 2.18-1.608 3.67-1.605 1.283.002 2.43.402 3.31 1.14.2-.429.342-.885.417-1.364.137-.895-.006-1.74-.425-2.46-.533-.91-1.438-1.49-2.55-1.636-2.8-.36-4.93.543-6.1 2.616-.503.895-.784 1.934-.843 3.09l-2.04-.016c.07-1.414.454-2.712 1.14-3.859 1.525-2.62 4.284-3.85 7.66-3.482 1.64.19 2.95.96 3.81 2.238.664 1.063.905 2.389.7 3.836v.041c-.04.228-.07.457-.088.69.703.265 1.324.68 1.83 1.22 1.42 1.573 1.54 4.15.285 6.327-1.045 1.82-3.27 3.43-6.954 3.495z"/>
                </svg>
              </a>
              <a href="https://wa.me/584126893075" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="WhatsApp">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

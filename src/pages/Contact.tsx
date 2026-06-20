import Header from "@/components/Header";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te responderemos pronto.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Hablemos
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            ¿Tienes una pregunta, una sugerencia o simplemente quieres saludar? Nos encantará leerte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="rounded-2xl bg-card p-8">
            <h2 className="text-2xl mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up stagger-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Correo electrónico</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="tu.correo@ejemplo.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Asunto</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="¿De qué quieres hablarnos?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Cuéntanos qué tienes en mente..." />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6">
                Enviar mensaje
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-card p-8">
              <h2 className="text-2xl mb-6">Información de contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="mb-1">Correo</h3>
                    <p className="text-muted-foreground">cavucorpo@gmail.com</p>
                    <p className="text-muted-foreground text-sm">Te respondemos en 24 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">Nueva Esparta, Venezuela</p>
                    <p className="text-muted-foreground text-sm">Equipo en remoto</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="mb-1">Teléfono / WhatsApp</h3>
                    <p className="text-muted-foreground">+58 412-689-3075</p>
                    <p className="text-muted-foreground text-sm">Lun-Vie, 9:00 a 17:00 VET</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl mb-4">Síguenos</h3>
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/carlos6684505" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="Facebook de Carlos Vas">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/carlos6684505" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="Instagram">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.threads.net/@carlos6684505" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="Threads">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.096 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.166 1.432 1.781 3.632 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.467-1.28 3.322-.885 1.149-2.13 1.759-3.608 1.784-1.135.02-2.123-.389-2.84-1.169-.785-.855-1.193-2.041-1.194-3.43 0-1.495.42-2.773 1.206-3.684.895-1.04 2.18-1.608 3.67-1.605 1.283.002 2.43.402 3.31 1.14.2-.429.342-.885.417-1.364.137-.895-.006-1.74-.425-2.46-.533-.91-1.438-1.49-2.55-1.636-2.8-.36-4.93.543-6.1 2.616-.503.895-.784 1.934-.843 3.09l-2.04-.016c.07-1.414.454-2.712 1.14-3.859 1.525-2.62 4.284-3.85 7.66-3.482 1.64.19 2.95.96 3.81 2.238.664 1.063.905 2.389.7 3.836v.041c-.04.228-.07.457-.088.69.703.265 1.324.68 1.83 1.22 1.42 1.573 1.54 4.15.285 6.327-1.045 1.82-3.27 3.43-6.954 3.495z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/584126893075" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="WhatsApp">
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-muted p-8">
              <h3 className="text-xl mb-4">Preguntas frecuentes</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="mb-1">¿Puedo colaborar con Perspective?</h4>
                  <p className="text-muted-foreground">¡Sí! Recibimos colaboraciones. Usa el formulario para enviarnos tu idea o propuesta de artículo.</p>
                </div>
                <div>
                  <h4 className="mb-1">¿Cómo anuncio con vosotros?</h4>
                  <p className="text-muted-foreground">Para consultas publicitarias, escribe a cavucorpo@gmail.com con los datos de tu marca.</p>
                </div>
                <div>
                  <h4 className="mb-1">¿Puedo republicar vuestro contenido?</h4>
                  <p className="text-muted-foreground">Contáctanos para permisos y licencias. Normalmente facilitamos la republicación con la atribución adecuada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

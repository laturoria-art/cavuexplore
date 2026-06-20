import Header from "@/components/Header";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl leading-tight animate-slide-down">Política de privacidad</h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">Última actualización: 20 de marzo de 2025</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl mb-4">Introducción</h2>
            <p className="text-muted-foreground">
              En Perspective nos tomamos la privacidad muy en serio. Esta política explica cómo recopilamos, usamos,
              divulgamos y protegemos tu información cuando visitas nuestro sitio web y te suscribes al newsletter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Información que recopilamos</h2>
            <h3 className="text-xl mb-3 mt-6">Información personal</h3>
            <p className="text-muted-foreground mb-4">Podemos recopilar información personal que nos facilites de forma voluntaria cuando:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Te suscribes al newsletter</li>
              <li>Nos contactas a través del formulario</li>
              <li>Comentas nuestros artículos</li>
              <li>Creas una cuenta en el sitio</li>
            </ul>
            <p className="text-muted-foreground mt-4">Esta información puede incluir tu nombre, correo electrónico y cualquier otro dato que decidas compartir.</p>

            <h3 className="text-xl mb-3 mt-6">Información recopilada automáticamente</h3>
            <p className="text-muted-foreground">
              Cuando visitas el sitio podemos recopilar automáticamente cierta información sobre tu dispositivo,
              incluyendo navegador, dirección IP, zona horaria y algunas cookies instaladas en tu equipo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Cómo usamos tu información</h2>
            <p className="text-muted-foreground mb-4">Usamos la información recopilada para:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Enviarte el newsletter y comunicaciones</li>
              <li>Responder a tus comentarios y preguntas</li>
              <li>Mejorar el sitio y los contenidos</li>
              <li>Analizar patrones de uso y tendencias</li>
              <li>Proteger contra actividades fraudulentas o ilegales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Cookies y tecnologías de seguimiento</h2>
            <p className="text-muted-foreground">
              Usamos cookies y tecnologías similares para registrar actividad en el sitio y almacenar cierta información.
              Puedes configurar tu navegador para rechazar las cookies o avisarte cuando se envían. Si las rechazas,
              algunas partes del sitio podrían no funcionar correctamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Seguridad de los datos</h2>
            <p className="text-muted-foreground">
              Aplicamos medidas técnicas y organizativas adecuadas para proteger tu información personal. Aun así,
              ningún método de transmisión por Internet ni de almacenamiento electrónico es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Tus derechos</h2>
            <p className="text-muted-foreground mb-4">Según tu ubicación, puedes tener ciertos derechos sobre tu información personal, entre otros:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Acceder a tu información personal</li>
              <li>Rectificar información inexacta</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Retirar tu consentimiento</li>
              <li>Portabilidad de datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Servicios de terceros</h2>
            <p className="text-muted-foreground">
              El sitio puede contener enlaces a sitios de terceros. No nos hacemos responsables de sus prácticas de
              privacidad y te recomendamos revisar sus políticas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Privacidad de menores</h2>
            <p className="text-muted-foreground">
              Este sitio no está dirigido a menores de 13 años. No recopilamos información personal de menores de 13
              años de manera intencional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Cambios en esta política</h2>
            <p className="text-muted-foreground">
              Podemos actualizar esta política de privacidad periódicamente. Te avisaremos publicando la nueva versión
              en esta página y actualizando la fecha de «Última actualización».
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Contacto</h2>
            <p className="text-muted-foreground">Si tienes preguntas sobre esta política, contáctanos en:</p>
            <p className="text-muted-foreground mt-4">
              Correo: cavucorpo@gmail.com<br />
              Dirección: Nueva Esparta, Venezuela
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;

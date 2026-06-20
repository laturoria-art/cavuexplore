import Header from "@/components/Header";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl leading-tight animate-slide-down">Términos de servicio</h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">Última actualización: 20 de marzo de 2025</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl mb-4">Aceptación de los términos</h2>
            <p className="text-muted-foreground">
              Al acceder o usar el sitio y los servicios de Perspective, aceptas estos términos de servicio.
              Si no estás de acuerdo con alguna parte, no podrás acceder a nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Licencia de uso</h2>
            <p className="text-muted-foreground mb-4">
              Se concede permiso para acceder de forma temporal a los materiales del sitio para uso personal y no comercial.
              Esta es una licencia, no una transferencia de titularidad, y bajo ella no puedes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Modificar o copiar los materiales</li>
              <li>Usarlos con fines comerciales o de exhibición pública</li>
              <li>Intentar descompilar o aplicar ingeniería inversa al software del sitio</li>
              <li>Eliminar avisos de derechos de autor u otras notas de propiedad</li>
              <li>Transferir los materiales a otras personas o replicarlos en otro servidor</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Contenido de las personas usuarias</h2>
            <p className="text-muted-foreground">
              Al publicar comentarios o cualquier otro contenido en el sitio, nos concedes una licencia no exclusiva,
              mundial y libre de regalías para usar, reproducir y mostrar dicho contenido. Declaras que posees los
              derechos necesarios sobre el contenido que publicas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Usos prohibidos</h2>
            <p className="text-muted-foreground mb-4">No puedes usar nuestro sitio:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>De forma que viole cualquier ley o reglamento aplicable</li>
              <li>Para transmitir código dañino o malicioso</li>
              <li>Para suplantar a Perspective o a cualquier persona del equipo</li>
              <li>Para acosar, abusar o dañar a otra persona</li>
              <li>Para hacer spam o enviar comunicaciones no solicitadas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Propiedad intelectual</h2>
            <p className="text-muted-foreground">
              Todo el contenido de Perspective, incluyendo artículos, imágenes, logotipos y diseños, es propiedad
              de Perspective o de sus creadoras y creadores, y está protegido por las leyes internacionales de derechos
              de autor. El uso no autorizado puede infringir esas leyes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Descargo de responsabilidad</h2>
            <p className="text-muted-foreground">
              Los materiales del sitio se ofrecen «tal cual». Perspective no ofrece garantías expresas ni implícitas y
              renuncia a todas las garantías, incluidas las de comerciabilidad, idoneidad para un fin concreto o no infracción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Limitación de responsabilidad</h2>
            <p className="text-muted-foreground">
              En ningún caso Perspective o sus proveedores serán responsables de daños (incluyendo, sin limitación,
              pérdida de datos o lucro cesante) derivados del uso o la imposibilidad de uso del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Enlaces a otros sitios</h2>
            <p className="text-muted-foreground">
              Nuestro sitio puede contener enlaces a sitios de terceros que no son propiedad de Perspective ni están
              bajo su control. No asumimos responsabilidad por su contenido o políticas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Modificaciones</h2>
            <p className="text-muted-foreground">
              Perspective puede revisar estos términos en cualquier momento sin previo aviso. Al utilizar este sitio,
              aceptas quedar sujeto a la versión vigente de los términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Ley aplicable</h2>
            <p className="text-muted-foreground">
              Estos términos se rigen por las leyes del Estado de California, sin considerar sus principios de
              conflicto de leyes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Contacto</h2>
            <p className="text-muted-foreground">Si tienes preguntas sobre estos términos, contáctanos en:</p>
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

export default Terms;

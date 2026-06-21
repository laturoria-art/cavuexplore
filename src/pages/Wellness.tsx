import CategoryPage from "@/components/CategoryPage";

const Wellness = () => (
  <CategoryPage
    categorySlug="bienestar"
    title="Bienestar y autocuidado"
    intro="Descubre prácticas, ideas y estrategias para cuidar tu bienestar físico, mental y emocional. De las rutinas conscientes a los enfoques holísticos de salud, explora maneras de crear equilibrio y vitalidad en tu día a día."
    ctaTitle="Por qué importa el bienestar"
    ctaParagraphs={[
      "El bienestar no es solo salud física: es crear armonía entre el cuerpo, la mente y el espíritu. En un mundo acelerado, dedicar tiempo a cuidarnos no es un lujo, es algo esencial.",
      "A través de prácticas conscientes podemos construir resiliencia, mejorar nuestras relaciones y vivir vidas más plenas. Cada pequeño paso cuenta.",
    ]}
  />
);

export default Wellness;

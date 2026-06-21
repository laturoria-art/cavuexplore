import CategoryPage from "@/components/CategoryPage";

const Creativity = () => (
  <CategoryPage
    categorySlug="creatividad"
    title="Creatividad e inspiración"
    intro="Explora prácticas, herramientas y reflexiones para reconectar con tu creatividad. Desde escribir un diario hasta construir nuevos hábitos de expresión, descubre formas de vivir con más imaginación."
    ctaTitle="La creatividad es para todos"
    ctaParagraphs={[
      "Crear no es exclusivo de artistas profesionales: es una forma de pensar, de mirar y de habitar el mundo.",
      "Cuando hacemos sitio para la creatividad en lo cotidiano, encontramos sentido, juego y profundidad en las pequeñas cosas.",
    ]}
  />
);

export default Creativity;

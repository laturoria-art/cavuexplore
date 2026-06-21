import CategoryPage from "@/components/CategoryPage";

const Travel = () => (
  <CategoryPage
    categorySlug="viajes"
    title="Viajes y exploración"
    intro="Recorre destinos inspiradores, descubre la riqueza cultural de cada lugar y aprende a viajar de forma consciente. Explora el mundo con intención, curiosidad y respeto por las comunidades locales."
    ctaTitle="Viajar con sentido"
    ctaParagraphs={[
      "Viajar es mucho más que cambiar de lugar: es ampliar la mirada, encontrarse con otras formas de vivir y volver con nuevas preguntas.",
      "El viaje pausado y respetuoso convierte cada destino en una oportunidad real de aprendizaje y conexión.",
    ]}
  />
);

export default Travel;

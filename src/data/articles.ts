export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "001",
    title: "Susurros de sabiduría",
    subtitle: "Encontrar claridad en los momentos de calma al planificar tus finanzas",
    category: "Finanzas",
    date: "16 oct 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Escritor sobre bienestar financiero y crecimiento personal",
    },
    content: {
      introduction:
        "En un mundo de ruido financiero y consejos contradictorios, a veces lo más sabio es escuchar los susurros: esos momentos de claridad que abren paso entre el caos. Planificar tus finanzas no va solo de números; va de entender tus valores y alinear tus recursos con lo que de verdad importa.",
      sections: [
        {
          heading: "El poder de la reflexión en silencio",
          content:
            "Antes de tomar cualquier decisión financiera importante, solemos correr a consumir más información o pedir más consejos. Pero las ideas más profundas suelen aparecer cuando damos un paso atrás y reflexionamos. Dedicar tiempo a la contemplación nos conecta con nuestros valores y con lo que la seguridad financiera significa realmente para nosotros.",
        },
        {
          heading: "Construir conciencia financiera",
          content:
            "La verdadera sabiduría financiera empieza por la conciencia. Es evaluar con honestidad dónde estás, entender tus patrones con el dinero y reconocer las emociones que hay detrás de tus decisiones. No se trata de juzgarte, sino de observar con claridad. Al ver tu realidad financiera con nitidez, puedes generar cambios intencionales.",
        },
        {
          heading: "Pequeños pasos, cambios duraderos",
          content:
            "Los susurros de sabiduría suelen llevarnos a acciones pequeñas y sostenibles, no a giros dramáticos. Quizá automatizar un pequeño ahorro, ordenar tus documentos o tener esa conversación honesta sobre dinero con tu pareja. Esas acciones discretas, aplicadas con constancia, crean un cambio profundo con el tiempo.",
        },
        {
          heading: "Planificar según tus valores",
          content:
            "Cuando alineamos las decisiones financieras con nuestros valores, el dinero se convierte en una herramienta para crear la vida que queremos. Pregúntate: ¿qué valoro de verdad? ¿Cómo pueden mis decisiones económicas apoyar esos valores? Las respuestas son tu brújula.",
        },
      ],
      conclusion:
        "La sabiduría financiera no está en las voces más altas ni en las estrategias más complejas. Se descubre en momentos de reflexión, en el cuidado de tus valores y en la aplicación constante de acciones simples e intencionales. Escucha los susurros: muchas veces son los que dicen la verdad más honda.",
    },
    tags: ["planificación financiera", "atención plena", "finanzas personales", "valores"],
  },
  {
    id: "002",
    title: "Tinta y reflexión",
    subtitle: "El arte de llevar un diario para vivir con más intención",
    category: "Estilo de vida",
    date: "23 oct 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80",
    author: {
      name: "Sofía Rodríguez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      bio: "Escritora creativa y practicante de mindfulness",
    },
    content: {
      introduction:
        "Hay algo profundo en poner pluma sobre papel: la forma en que la tinta fluye y captura ideas que de otro modo se evaporarían. En la era digital, escribir un diario nos ofrece una oportunidad rara para frenar, reflexionar y conectarnos con nosotros mismos de manera tangible.",
      sections: [
        {
          heading: "Por qué importa lo analógico",
          content:
            "Aunque las herramientas digitales tienen su lugar, hay neurociencia que explica por qué escribir a mano implica al cerebro de otra forma. El acto físico de escribir ralentiza el pensamiento y permite una reflexión más profunda. Es mindfulness en acción: nos ancla en el presente mientras exploramos nuestro paisaje interior.",
        },
        {
          heading: "Crear tu propia práctica",
          content:
            "Tu práctica no necesita ser elaborada. Empieza con cinco minutos por la mañana o por la noche. Escribe sin juzgarte; no se trata de prosa perfecta. Se trata de aparecer para ti, crear espacio para reflexionar y construir una relación con tus pensamientos y emociones.",
        },
        {
          heading: "Preguntas para profundizar",
          content:
            "Cuando no sepas qué escribir, las preguntas ayudan: ¿qué agradezco hoy? ¿qué me ha desafiado y qué he aprendido? ¿qué necesito más en mi vida? ¿qué puedo soltar? Estas preguntas invitan a la introspección y revelan patrones.",
        },
        {
          heading: "El regalo de mirar atrás",
          content:
            "Uno de los grandes regalos del diario se revela con el tiempo. Al releer entradas vemos cómo hemos crecido, qué hemos superado y qué patrones podríamos cambiar. Esta perspectiva histórica ofrece una sabiduría a la que no podemos acceder solo desde el presente.",
        },
      ],
      conclusion:
        "Escribir un diario es más que registrar: es una práctica de autodescubrimiento y vida con intención. Esas páginas manchadas de tinta se convierten en un mapa de tu viaje interior y en una herramienta para crear la vida que imaginas. Empieza hoy, aunque solo sean cinco minutos.",
    },
    tags: ["diario personal", "atención plena", "autoconocimiento", "estilo de vida"],
  },
  {
    id: "003",
    title: "Reflexiones en escala de grises",
    subtitle: "Encontrar belleza y claridad en los momentos neutros de la vida",
    category: "Comunidad",
    date: "4 dic 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1920&q=80",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Constructor de comunidad y escritor contemplativo",
    },
    content: {
      introduction:
        "Solemos buscar los extremos: los picos de alegría, las simas de tristeza, los colores intensos que definen nuestras experiencias. ¿Y los espacios intermedios? Los momentos neutros, los grises del día a día que conforman la mayor parte de nuestra existencia. Hay una belleza y una sabiduría inesperadas en ellos.",
      sections: [
        {
          heading: "La mayoría que pasamos por alto",
          content:
            "La mayor parte de la vida no es dramática. Es el café de la mañana, los trayectos rutinarios, las noches tranquilas y las conversaciones ordinarias. Tendemos a ignorar esos momentos esperando que ocurra algo «significativo». Sin embargo, abordados con presencia, esos momentos en escala de grises tienen su propia riqueza silenciosa.",
        },
        {
          heading: "Comunidad en lo cotidiano",
          content:
            "Algunas de las conexiones comunitarias más profundas no ocurren en grandes gestos, sino en momentos ordinarios: la vecina que saluda cada mañana, el camarero que recuerda tu pedido, la compañera que pregunta cómo estás un martes cualquiera. Esas pequeñas interacciones repetidas crean la textura del pertenecer.",
        },
        {
          heading: "Claridad en la neutralidad",
          content:
            "Cuando no estamos atrapados en extremos emocionales, vemos con más claridad. Los momentos neutros ofrecen perspectiva: una oportunidad de observar nuestra vida sin la distorsión de emociones intensas. Esa claridad ayuda a tomar mejores decisiones y a entender qué nos importa de verdad.",
        },
        {
          heading: "Cultivar el aprecio",
          content:
            "Aprender a apreciar lo neutro no es conformarse, es ampliar nuestra capacidad de contentamiento. Es reconocer que una tarde tranquila de domingo, una comida sencilla con amigos o un paseo sin destino tienen valor por sí mismos. Ese aprecio nos hace más resilientes y menos dependientes de lo externo.",
        },
      ],
      conclusion:
        "Vivir en escala de grises no es aburrido: es el lienzo sobre el que aparece todo lo demás. Aprender a apreciar esos momentos neutros y las conexiones comunitarias que contienen enriquece toda nuestra experiencia. La próxima vez que estés en un momento «ordinario», haz una pausa y mira de cerca. Puede sorprenderte.",
    },
    tags: ["atención plena", "comunidad", "presencia", "contentamiento"],
  },
  {
    id: "W001",
    title: "Encontrar el equilibrio: cómo crear una rutina sostenible de autocuidado",
    subtitle: "Desarrollar prácticas que de verdad se mantengan",
    category: "Bienestar",
    date: "19 mar 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bio: "Coach de bienestar certificada y profesional de salud holística",
    },
    content: {
      introduction:
        "El autocuidado se ha vuelto una palabra de moda, asociada a días de spa y caprichos. Aunque eso tiene su sitio, el verdadero autocuidado son prácticas sostenibles que apoyan tu bienestar físico, mental y emocional de forma constante, no solo cuando ya estás agotado.",
      sections: [
        {
          heading: "Entender tus necesidades",
          content:
            "Antes de construir una rutina, necesitas entender qué te hace falta de verdad. ¿Te falta movimiento físico, descanso mental, procesamiento emocional o conexión social? El autocuidado no es talla única. Tómate tiempo para evaluar dónde estás agotado y qué te nutriría.",
        },
        {
          heading: "Empieza pequeño y específico",
          content:
            "El mayor error es intentar cambiarlo todo de golpe. En su lugar, empieza con una práctica pequeña y concreta: cinco minutos de estiramientos, un vaso de agua antes del café o diez minutos al aire libre. Las acciones pequeñas y constantes crean un cambio duradero.",
        },
        {
          heading: "Los cuatro pilares del bienestar",
          content:
            "Una rutina equilibrada atiende cuatro áreas: salud física (movimiento, alimentación, sueño), salud mental (gestión del estrés, aprendizaje, descanso), salud emocional (procesar emociones, conexión, creatividad) y salud espiritual (sentido, propósito, valores). No hace falta algo elaborado en cada área, solo atención intencional.",
        },
        {
          heading: "Hacerlo sostenible",
          content:
            "La sostenibilidad llega por integración, no por adición. En vez de añadir más a tu agenda, busca cómo integrar el autocuidado en tus rutinas: reuniones caminando, comer con atención plena o convertir tu trayecto en un momento para escuchar pódcast inspiradores.",
        },
        {
          heading: "Cuando el autocuidado parece egoísmo",
          content:
            "Muchas personas, sobre todo cuidadoras, sienten culpa al cuidarse. Recuerda: no puedes servir desde una taza vacía. Cuidarte no es egoísmo, es necesario para mostrar lo mejor de ti hacia las demás personas. Tu bienestar importa por sí mismo.",
        },
      ],
      conclusion:
        "Una rutina sostenible de autocuidado no busca la perfección ni prácticas elaboradas. Son acciones constantes e intencionales que apoyan tu bienestar en todas sus dimensiones. Empieza pequeño, ten paciencia contigo y recuerda que el autocuidado es una práctica, no un destino.",
    },
    tags: ["autocuidado", "bienestar", "atención plena", "vida sostenible"],
  },
  {
    id: "T001",
    title: "El arte del viaje pausado: abrazar las experiencias locales",
    subtitle: "Descubrir profundidad por encima de distancia",
    category: "Viajes",
    date: "15 mar 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Defensor del viaje pausado y especialista en inmersión cultural",
    },
    content: {
      introduction:
        "En una época de tours relámpago y listas interminables, el viaje pausado ofrece una alternativa radical: quedarte más tiempo, ir más hondo y experimentar de verdad un lugar en vez de solo verlo. No se trata de cuántos países has visitado, sino de cuán profundamente te has conectado con los lugares.",
      sections: [
        {
          heading: "¿Qué es el viaje pausado?",
          content:
            "Es una filosofía que prioriza profundidad sobre amplitud y calidad sobre cantidad. Significa quedarte en menos lugares durante más tiempo, crear rutinas en nuevos sitios, comprar en mercados locales y construir relaciones con la gente del lugar. Vivir el destino como residente temporal.",
        },
        {
          heading: "Los beneficios de frenar",
          content:
            "Cuando frenas, viajar se vuelve más rico y significativo. Notas detalles que pasarías por alto al correr de un sitio a otro. Tienes tiempo para conversaciones espontáneas, descubrimientos inesperados e intercambio cultural genuino. Y vuelves a casa menos agotado.",
        },
        {
          heading: "Pasos prácticos",
          content:
            "Empieza eligiendo un lugar y quédate al menos una semana, mejor dos. Alquila un piso en lugar de un hotel. Compra en mercados locales, usa el transporte público y crea rutinas como un café habitual o un paseo matinal. Acepta invitaciones de la gente local. Deja huecos sin planificar.",
        },
        {
          heading: "Superar el miedo a perderse algo",
          content:
            "El mayor reto es superar el FOMO. Quizá no veas todos los museos. No pasa nada. Estás eligiendo profundidad sobre amplitud, experiencia sobre completar listas. El objetivo no es tachar, es comprender un lugar.",
        },
        {
          heading: "Beneficios ambientales y culturales",
          content:
            "El viaje pausado es más sostenible: menos vuelos, más gasto local, menos turismo masivo. Y es más respetuoso con las comunidades. Al quedarte más tiempo, contribuyes de forma más significativa y tiendes puentes entre culturas.",
        },
      ],
      conclusion:
        "Viajar pausado no es solo una forma de moverse por el mundo; es una mentalidad que valora la presencia, la conexión y la comprensión. Al frenar, paradójicamente, experimentamos más. La próxima vez que viajes, considera ir a menos sitios y quedarte más. El viaje se vuelve infinitamente más rico.",
    },
    tags: ["viaje pausado", "turismo sostenible", "inmersión cultural", "exploración consciente"],
  },
  {
    id: "G001",
    title: "Vida minimalista: hacer sitio para lo que más importa",
    subtitle: "La libertad que se encuentra al soltar",
    category: "Crecimiento",
    date: "10 mar 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Defensor del minimalismo y coach de vida intencional",
    },
    content: {
      introduction:
        "El minimalismo no va de tener menos por tener menos: va de hacer sitio para más claridad, más libertad y más foco en lo que importa. En una cultura volcada al consumo, elegir vivir con menos es un acto radical de intencionalidad.",
      sections: [
        {
          heading: "Más allá de la estética",
          content:
            "El minimalismo ha sido secuestrado por una estética concreta: paredes blancas, muebles escasos, espacios perfectamente curados. Pero el minimalismo real va de valores, no de imagen. Va de eliminar lo superfluo para enfocarte en lo que añade valor. Tu vida minimalista puede verse distinta a la de otros, y eso está bien.",
        },
        {
          heading: "El proceso de soltar",
          content:
            "El minimalismo es tan psicológico como físico. Al ordenar tus pertenencias, también examinas apegos, identidades y hábitos. Esa caja de libros de la universidad no son solo libros: es quien fuiste. Aprender a soltar objetos nos entrena para soltar en otras áreas.",
        },
        {
          heading: "Calidad sobre cantidad",
          content:
            "El minimalismo no es privación: es selección. En vez de diez pares de zapatos mediocres, quédate con tres que ames. En vez de un armario lleno de ropa que no usas, mantén una colección menor pero que te haga sentir bien. Al reducir cantidad, aumentas calidad.",
        },
        {
          heading: "Minimalismo mental y digital",
          content:
            "El desorden físico es solo una dimensión. Piensa en tus compromisos, tu agenda, tu vida digital. ¿Necesitas estar en cinco redes sociales? ¿Debes decir sí a toda invitación? El minimalismo aplica también al tiempo y a la atención. Protege tu espacio mental con el mismo cuidado.",
        },
        {
          heading: "La libertad del menos",
          content:
            "Lo que crea el minimalismo: menos tiempo limpiando y organizando, menos decisiones, menos presión económica, más claridad mental, mayor foco en relaciones y experiencias. Al quitar lo que no importa, hacemos sitio para lo que sí. Ese es el verdadero regalo.",
        },
      ],
      conclusion:
        "El minimalismo es un camino, no un destino. No necesitas purgarlo todo ni vivir en una habitación vacía. Empieza por un cajón, una categoría, un área de tu vida. Al experimentar la ligereza que da soltar, querrás seguir. Lo que descubrirás no es solo menos cosas, sino más libertad, claridad y espacio para lo que importa.",
    },
    tags: ["minimalismo", "vida intencional", "simplicidad", "crecimiento personal"],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}

export function getRelatedArticles(currentId: string, limit: number = 3): Article[] {
  const currentArticle = getArticleById(currentId);
  if (!currentArticle) return articles.slice(0, limit);

  const related = articles.filter(
    (article) => article.id !== currentId && article.category === currentArticle.category
  );

  if (related.length < limit) {
    const others = articles.filter(
      (article) => article.id !== currentId && article.category !== currentArticle.category
    );
    return [...related, ...others].slice(0, limit);
  }

  return related.slice(0, limit);
}

import { Description } from "node_modules/@headlessui/react/dist/components/description/description";

// Lista de artículos del blog
export const posts = [
  {
    // Identificador único en la URL
    slug: "Tendencias-anillos-2025",

    // Etiqueta destacada (puede ser "Nuevo", "Popular", etc.)
    label: "Interesante",

    // Imagen principal del artículo
    img: "/blogs/post21_05_25/compromiso-2025.jpg",
    descriptionImg: "Una mirada que lo dice todo, un 'sí' eterno bajo los árboles. Así luce el verdadero amor sellado con anillos de boda artesanales, hechos con paciencia y emoción. Descubre la magia de casarte en Ecuador con piezas únicas que cuentan su propia historia.",
    alt: "imagen pareja anillos de boda",

    // Título completo y atractivo del artículo
    title: "Los Mejores Anillos de Compromiso en Ecuador 2025: Oro y Plata con Baño de Oro",

    // Breve texto para las cards (resumen visual)
    text: "Tendencias en este 2025 en anillos sencillos a partir de modelos clásicos y rescatados de una época antigua.",

    // Descripción corta para SEO (ideal para Open Graph o meta description)
    summary: `Elegir el anillo perfecto para el 2025 puede parecer una tarea difícil, pero estamos aquí para ayudarte. En este artículo descubrirás cuáles son las mejores opciones en anillos de compromiso y matrimonio disponibles en Ecuador, especialmente en materiales como el oro amarillo, el oro blanco, y la plata con baño de oro.`,

    // Primer bloque de contenido (HTML)
    content: `
      <h3 class="text-xl font-semibold mb-2">1. Tendencias en Anillos de Compromiso para el 2025</h3>
      <p>Para este nuevo año, los anillos personalizados siguen marcando la pauta. Cada vez más parejas en Ecuador buscan piezas únicas que reflejen su estilo y su historia.</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Diseños minimalistas: líneas limpias, delgadas, con pequeños diamantes o cristales de Swarovski.</li>
        <li>Anillos entorchados: una mezcla entre lo artesanal y lo moderno.</li>
        <li>Combinación de metales: como plata bañada en oro amarillo o rosado.</li>
        <li>Grabados personalizados: fechas, nombres o frases significativas.</li>
      </ul>
      <p class="mt-2">Estas tendencias no solo embellecen la joya, sino que también le dan un valor emocional profundo.</p>
      
      <h3 class="text-xl font-semibold my-2">2. ¿Por qué Plata con Baño de Oro?</h3>
      <p>Para este nuevo año, los anillos personalizados siguen marcando la pauta. Cada vez más parejas en Ecuador buscan piezas únicas que reflejen su estilo y su historia.</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Diseños minimalistas: líneas limpias, delgadas, con pequeños diamantes o zirconias.</li>
        <li>Anillos entorchados: una mezcla entre lo artesanal y lo moderno.</li>
        <li>Combinación de metales: como plata bañada en oro amarillo o rosado.</li>
        <li>Grabados personalizados: fechas, nombres o frases significativas.</li>
      </ul>
      <p class="mt-2">Estas tendencias no solo embellecen la joya, sino que también le dan un valor emocional profundo.</p>
    `,

    // Segunda imagen con su descripción
    img2: "/blogs/post21_05_25/entorchado-plata-baño-rosado.jpg",
    descriptionImg2: "Consejo: asegúrate de que el baño de oro sea de buena calidad (mínimo 3 micras) para que el color perdure.",

    // Segundo bloque de contenido (HTML)
    content2: `
      <h3 class="text-xl font-semibold mb-2">3. Anillos de Oro: La Elección Clásica y Eterna</h3>
      <p>El oro sigue siendo el rey en cuanto a anillos de boda y compromiso. En Ecuador, los más demandados son:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Oro amarillo 18k: tradicional, cálido y duradero.</li>
        <li>Oro blanco 18k: elegante, moderno y muy combinable.</li>
        <li>Oro rosa 18k: una tendencia creciente por su romanticismo y suavidad..</li>
      </ul>
      <p class="mt-4">El oro no solo simboliza amor eterno, sino que también conserva su valor a lo largo del tiempo, por lo que representa una inversión segura y significativa.</p>
    `,

    // Tercera imagen con descripción
    img3: "/blogs/post21_05_25/explicacion.jpg",
    descriptionImg3: "Tomá esta foto como referencia para elegir el tuyo. Cada anillo tiene su encanto, solo es cuestión de encontrar el que te haga decir “es este”, siempre puedes pedir ayuda de tu asesor.",

    // Tercer bloque de contenido (HTML)
    content3: `
      <h3 class="text-xl font-semibold mb-2">5. ¿Dónde Comprar Anillos Personalizados en Ecuador?</h3>
      <p>Si buscas anillos de boda personalizados en Ecuador, en nuestra joyería Cásate Conmigo diseñamos y fabricamos cada pieza a medida, en oro, plata o plata bañada en oro. Algunos beneficios que ofrecemos:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Envíos a todo el país.</li>
        <li>Grabados gratis.</li>
        <li>Modelos exclusivos.</li>
        <li>Asesoría personalizada.</li>
      </ul>
      <p class="mt-2">Puedes ver nuestros modelos en los enlaces del fondo o escribirnos a WhatsApp para agendar una cita..</p>

      <h3 class="text-xl font-semibold my-2">6. Recomendaciones Finales para el 2025</h3>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Considera comprar tu anillo con al menos 2 meses de anticipación.</li>
        <li>No te olvides de la presentación: elige una caja elegante.</li>
        <li>Combina tu anillo con collares o aretes si deseas un set.</li>
        <li>Si eres alérgico a ciertos metales, asegúrate de verificar la aleación.</li>
      </ul>
    `,

    // Enlaces a productos relacionados
    links: [
      { href: "/shop/compromiso/AC-012", label: "Anillo De compromiso infinito" },
      { href:  "/shop/compromiso/AC-010", label: "Anillo Elegante" },
      { href: "/shop/compromiso/AC-001", label: "Anillo De Compromiso Delicado" }
    ]
  },
  {
    // Identificador único en la URL
    slug: "compromiso-infinito",

    // Etiqueta destacada (puede ser "Nuevo", "Popular", etc.)
    label: "Nuevo",

    // Imagen principal del artículo
    img: "/blogs/post24_05_25/infinito-frente.jpg",
    descriptionImg: "Un diseño entorchado único, elaborado en tu material favorito, oro 18k o plata 925 con baño de oro. Ya disponible en todas las tallas.",
    alt: "anillo de compromiso infinito",

    // Título completo y atractivo del artículo
    title: "Conoce el anillo de compromiso del que todos hablan",

    // Breve texto para las cards (resumen visual)
    text: "Tendencias en este 2025 en anillos sencillos a partir de modelos clásicos y rescatados de una época antigua.",

    // Descripción corta para SEO (ideal para Open Graph o meta description)
    summary: `Elegir el anillo perfecto puede parecer abrumador, pero hay un anillo que este año se ha robado todas las miradas: el anillo infinito. Más que una tendencia, se ha convertido en el modelo más solicitado de nuestra joyería, y no es para menos. Su diseño entorchado en ambos lados simboliza el amor eterno, y sus acabados lo convierten en una pieza elegante, moderna y atemporal.`,

    // Primer bloque de contenido (HTML)
    content: `
    <h3 class="text-xl font-semibold mb-2">1. El Significado del Anillo de Compromiso</h3> <p>En 1477 nace el anillo de compromiso como símbolo eterno del amor. Su forma circular no tiene principio ni fin, lo que representa la promesa de un amor infinito entre dos personas. Esta idea ha perdurado a lo largo de los siglos, transformándose en una tradición que hoy sigue viva con más fuerza que nunca.</p> <p class="mt-2">Con el tiempo, los diseños fueron evolucionando. Buscando una forma más expresiva y emocional, surgió el anillo <strong>entorchado</strong>: un diseño donde los metales se entrelazan, simbolizando la unión de dos caminos, dos vidas, en una sola historia. Este modelo artesanal se ha convertido en un favorito por su belleza y por el profundo significado que transmite.</p> <p class="mt-2">Para realzar su valor, hoy se acompaña de <strong>cristales de Swarovski</strong> o <strong>diamantes</strong>, agregando brillo, elegancia y un toque único que transforma cada anillo en una joya única y llena de significado. Así, lo clásico y lo moderno se unen para dar vida al anillo perfecto.</p>
    `,

    // Segunda imagen con su descripción
    img2: "/blogs/post24_05_25/infinito-amarillo.jpg",
    descriptionImg2: "Cada pieza se produce localmente en nuestra fábrica en Quito, lo que garantiza calidad, rapidez y un precio competitivo. No dependemos de intermediarios: tú hablas directo con los expertos.",

    // Segundo bloque de contenido (HTML)
    content2: `
      <h3 class="text-xl font-semibold mb-2">2. Precios Justos y Transparencia en Cada Anillo</h3> <p>En el mercado actual de Quito, muchos talleres y joyerías importantes manejan precios elevados en la fabricación de anillos de compromiso y matrimonio. Los costos pueden variar ampliamente según el diseño, el tipo de oro y el peso final, pero en muchos casos el precio por gramo supera los <strong>$180 o incluso $200 dólares</strong>, especialmente cuando se trata de oro blanco o rosado.</p> <p class="mt-2">En <strong>Cásate Conmigo</strong> apostamos por la transparencia y la accesibilidad. Mantenemos nuestros precios estables y competitivos, sin descuidar la calidad. Actualmente trabajamos el <strong>gramo de oro amarillo de 18k a $130</strong>, y tanto el <strong>oro blanco como el oro rosado a $170</strong> por gramo. Estos precios incluyen la mano de obra, la asesoría personalizada y la garantía de un trabajo artesanal hecho en nuestra propia fábrica.</p> <p class="mt-2">Con el <strong>precio del oro en constante aumento</strong> a nivel internacional, elegir tu anillo ahora no solo es una decisión emocional, también es una inversión inteligente. Te invitamos a cotizar sin compromiso y descubrir por qué cientos de parejas confían en nosotros para crear la joya más importante de sus vidas.</p>
    `,

    // Tercera imagen con descripción
    img3: "/blogs/post24_05_25/explicacion-infinito.jpg",
    descriptionImg3: "Usa esta imagen como referencia para saber qué pasos seguir. Si no conoces la talla, no te preocupes: cada mano es distinta y con gusto te ayudamos a adivinarla. Puedes enviarnos una foto y juntos encontraremos la talla ideal. Tu asesor está para acompañarte en todo momento.",

    // Tercer bloque de contenido (HTML)
    content3: `
     <h3 class="text-xl font-semibold mb-2">3. La Sorpresa Perfecta: Amor, Tradición y un Toque de Magia</h3> <p>Sabemos que una de las partes más emocionantes de pedir compromiso es la sorpresa. Esa mirada, ese instante único, merece ser perfecto. En <strong>Cásate Conmigo Joyería</strong> valoramos profundamente esta tradición y la cuidamos en cada detalle, ayudando a nuestros clientes a mantener viva la magia del romanticismo, como se ha hecho durante generaciones.</p> <p class="mt-2">Muchos de nuestros clientes nos escriben preocupados por no saber la talla exacta del anillo. Por eso, ofrecemos <strong>asesoría personalizada</strong> para ayudarte a adivinarla sin arruinar la sorpresa. Puedes enviarnos una foto de la mano de tu pareja o traernos discretamente uno de sus anillos, y con eso podremos estimar con bastante precisión la talla adecuada.</p> <p class="mt-2">Y si a pesar de todo el anillo no llegara a calzar perfectamente, <strong>hacemos el ajuste de talla de forma gratuita</strong> después de la entrega. Queremos que ese momento sea inolvidable, sin estrés ni complicaciones. Porque no solo hacemos joyas, <strong>hacemos recuerdos que duran para siempre</strong>.</p>
    `,
    links: [
      { href: "/shop/compromiso/AC-012", label: "Anillo de compromiso infinito (entorchado)" },
    ]
  },
  {
    slug: "en-que-mano-va-el-anillo-de-matrimonio",
    label: "Tradición",
    img: "/blogs/post30_05_25/mano-anillo.jpg",
    descriptionImg: "¿Sabías que el anillo no siempre se usa en la misma mano? Descubre cómo cambia esta tradición según el país.",
    alt: "pareja mostrando anillos de boda",
    title: "¿En Qué Mano Va El Anillo De Matrimonio? Tradición, significado y consejos actuales",
    text: "¿Tradición o comodidad? Descubre qué mano se usa para el anillo de matrimonio en distintos países.",
    summary: "¿En qué mano va el anillo de matrimonio? Aunque parece una duda simple, tiene una historia rica y tradiciones que varían en todo el mundo. Aprende todo lo que debes saber antes del gran día.",
    content: `
      <article class="space-y-4 leading-relaxed text-base">
        <p>Cuando estás por dar uno de los pasos más importantes de tu vida, como el matrimonio, surgen muchas preguntas. Una de las más comunes es: <strong>¿en qué mano va el anillo de matrimonio?</strong> Aunque parece una duda simple, tiene una historia rica detrás y varía según la cultura, las creencias y hasta la comodidad personal. Si estás organizando tu boda o simplemente quieres saber más sobre esta hermosa tradición, este artículo es para ti.</p>

        <h2 class="text-2xl font-semibold mt-6">¿Por qué usamos anillos para sellar el matrimonio?</h2>
        <h3 class="text-xl font-semibold mt-4">Significado simbólico del anillo de boda</h3>
        <p>El anillo es un <strong>símbolo universal de unión, amor eterno y compromiso</strong>. Su forma circular representa lo infinito: sin principio ni fin, como se espera que sea el amor en el matrimonio.</p>

        <h3 class="text-xl font-semibold mt-4">Historia de los anillos de matrimonio y compromiso</h3>
        <p>El uso de anillos de boda se remonta al <strong>Antiguo Egipto</strong>, donde se creía que el círculo simbolizaba la eternidad. Más adelante, los romanos adoptaron esta costumbre, agregando la idea de que el anillo debía colocarse en el <strong>dedo anular de la mano izquierda</strong>, ya que creían que por ahí pasaba la <em>vena amoris</em>, una vena conectada directamente al corazón.</p>

        <h3 class="text-xl font-semibold mt-4">¿Qué representa el uso del anillo en la mano izquierda o derecha?</h3>
        <p>En muchas culturas, la <strong>mano izquierda representa lo emocional</strong>, mientras que la derecha se asocia con la acción y lo racional. Dependiendo del país, una u otra puede tener más peso simbólico.</p>
      </article>
    `,
    img2: "/blogs/post30_05_25/pais.jpg",
    descriptionImg2: "Conoce cómo varía esta tradición entre Ecuador, Europa y culturas orientales.",
    content2: `
      <article class="space-y-4 leading-relaxed text-base">
        <h2 class="text-2xl font-semibold mt-6">¿En qué mano se pone el anillo de matrimonio en distintos países?</h2>
        <h3 class="text-xl font-semibold mt-4">Ecuador, Argentina, Colombia y otros países latinos</h3>
        <p>En <strong>Ecuador, Argentina, Perú, Colombia, México</strong> y gran parte de Latinoamérica, el anillo de matrimonio <strong>se usa en la mano izquierda</strong></p>

        <h3 class="text-xl font-semibold mt-4">Partes de Europa y Asia por tradición católica, ortodoxa o germánica</h3>
        <p>En <strong>Estados Unidos, Canadá, Francia, Italia</strong> y gran parte de Europa Occidental, el anillo de matrimonio se lleva en la <strong>mano izquierda</strong>. En cambio, en <strong>Alemania, Austria, Noruega, Dinamarca, Polonia, Hungría, Rusia,
          Grecia, Ucrania y Bulgaria</strong> y países del Medio Oriente, es más común verlo en la <strong>mano derecha</strong>.</p>

        <h3 class="text-xl font-semibold mt-4">Vena amoris: el mito del amor eterno</h3>
        <p>La famosa <em>vena amoris</em> es una creencia antigua que conecta el dedo anular con el corazón. Aunque no es anatómicamente exacta, sigue siendo una <strong>razón romántica</strong> por la cual muchas personas optan por ese dedo.</p>
      </article>
    `,
    img3: "/blogs/post30_05_25/toma-medidas.jpg",
    descriptionImg3: "Consejos útiles si no estás seguro de qué talla elegir o qué dedo usar.",
    content3: `
      <article class="space-y-4 leading-relaxed text-base">
        <h2 class="text-2xl font-semibold mt-6">¿En qué dedo se coloca el anillo de matrimonio?</h2>
        <h3 class="text-xl font-semibold mt-4">Dedo anular y su simbolismo</h3>
        <p>El anillo se coloca tradicionalmente en el <strong>dedo anular</strong>, tanto por la creencia de la <em>vena amoris</em> como por su simbolismo. Es el dedo más discreto, pero también fuerte, lo que lo convierte en un espacio perfecto para un símbolo tan importante.</p>

        <h3 class="text-xl font-semibold mt-4">¿Qué pasa si se usa en otro dedo? ¿Es válido?</h3>
        <p>Claro que sí. Aunque la tradición recomienda el anular, <strong>lo más importante es lo que la pareja decida</strong>. Algunas personas prefieren otro dedo por comodidad, estilo o razones personales.</p>

        <h2 class="text-2xl font-semibold mt-6">Diferencia entre anillo de compromiso y anillo de matrimonio</h2>
        <h3 class="text-xl font-semibold mt-4">Cuándo se entregan y qué simboliza cada uno</h3>
        <p>El <strong>anillo de compromiso</strong> se entrega al hacer la propuesta, como promesa de unión. El <strong>anillo de matrimonio o alianza</strong> se entrega durante la ceremonia y representa el vínculo sellado.</p>

        <h3 class="text-xl font-semibold mt-4">¿Se usan juntos o separados? Orden correcto</h3>
        <p>Sí, muchas personas usan ambos anillos juntos. Lo habitual es llevar primero la <strong>alianza</strong> (más cercana al corazón) y encima el <strong>anillo de compromiso</strong>. Pero también puedes optar por llevar solo uno o usarlos en diferentes manos.</p>

        <h3 class="text-xl font-semibold mt-4">Diseños y materiales más comunes: oro, plata, alianzas con diamantes</h3>
        <p>El <strong>oro amarillo de 18k</strong> es el clásico eterno, mientras que el <strong>oro blanco y el oro rosado</strong> han ganado popularidad por su estilo moderno. La <strong>plata 925 con baño de oro</strong> es una alternativa económica y muy elegante. Además, puedes elegir <strong>cristales Swarovski, diamantes o piedras personalizadas</strong> para hacerlo aún más único.</p>

        <h2 class="text-2xl font-semibold mt-6">¿Qué mano se usa para el anillo de matrimonio si soy zurdo/a?</h2>
        <p>Aunque no hay una regla específica, si eres zurdo/a y te incomoda usar el anillo en la izquierda, puedes llevarlo en la derecha. <strong>Lo importante es que te sientas cómodo y que refleje tu estilo</strong>.</p>

        <h2 class="text-2xl font-semibold mt-6">¿Qué hago si el anillo no queda bien después de la boda?</h2>
        <h3 class="text-xl font-semibold mt-4">Opciones de ajuste o cambio de talla</h3>
        <p>No te preocupes. En nuestra joyería, ofrecemos <strong>ajustes gratuitos de talla</strong> después de la compra, si el anillo fue una sorpresa. Solo trae la pieza y la modificamos sin costo adicional.</p>

        <h3 class="text-xl font-semibold mt-4">Tus complices</h3>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li>Traer un anillo de la persona amada.</li>
          <li>Mandar una foto de su mano para estimar la talla.</li>
          <li>Solicitar una asesoría gratuita por WhatsApp con nuestros asesores.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6">Consejos para elegir el anillo de matrimonio perfecto</h2>
        <h3 class="text-xl font-semibold mt-4">¿Plata con baño de oro, oro blanco o amarillo?</h3>
        <p>Elige según tu estilo, presupuesto y durabilidad deseada. El <strong>oro de 18k</strong> es para toda la vida, mientras que la <strong>plata con baño de oro</strong> es una opción elegante y accesible.</p>

        <h2 class="text-2xl font-semibold mt-6 text-red-500">Preguntas frecuentes sobre anillos de matrimonio</h2>
        <h3 class="text-xl font-semibold mt-4">¿Se puede usar en la mano derecha?</h3>
        <p>Sí. En muchos países es lo normal. <strong>No hay una única forma correcta.</strong></p>

        <h3 class="text-xl font-semibold mt-4">¿Qué diferencia hay entre alianzas y anillos de compromiso?</h3>
        <p>Las <strong>alianzas</strong> son más simples y se entregan en la boda. El <strong>anillo de compromiso</strong> suele tener una piedra y se entrega antes.</p>

        <h3 class="text-xl font-semibold mt-4">¿Qué materiales son más duraderos y de mejor calidad?</h3>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>Oro 18k:</strong> eterno y resistente.</li>
          <li><strong>Plata 925 con baño de oro:</strong> excelente estética con precio accesible.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6">Conclusión: Lo más importante es lo que representa para ustedes</h2>
        <p>Más allá de qué mano uses, lo verdaderamente importante es lo que ese anillo significa para ti y tu pareja. Puede ser una tradición, una promesa o un símbolo personalizado. Lo esencial es que los acompañe en su historia de amor.</p>

      </article>
    `,
    links: [
      { href: "/shop/matrimonio/AM-001", label: "Anillos matrimonio delicados" },
      { href: "/shop/matrimonio/AM-019", label: "Anillo matrimonio olas más vendidos" },
    ]
  }
];

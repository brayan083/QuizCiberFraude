export const questions = [
  {
    type: "yesno",
    question: "¿Tu equipo de atención al cliente ha detectado problemas en envíos que no se han realizado desde la tienda oficial?",
    correctAnswer: true,
    explanationYes: "Es posible que estés enfrentando un caso de suplantación de marca. Clientes pueden haber sido estafados a través de tiendas falsas que están usando tu nombre y logo. Esto puede dañar la reputación de tu marca y generar confusión entre tus clientes legítimos.",
    explanationNo: "Aunque no hayas detectado este problema aún, es importante mantenerse alerta. La suplantación de marca es una táctica común de los ciberdelincuentes y puede surgir en cualquier momento, afectando la confianza de tus clientes y tu reputación."
  },
  {
    type: "yesno",
    question: "¿Has notado una bajada de ingresos y no sabes de dónde viene? ¿Bajadas de tráfico puntuales o bajadas en retornos en campañas de publicidad?",
    correctAnswer: true,
    explanationYes: "Estas señales podrían indicar la presencia de campañas de anuncios falsos que están desviando a tus usuarios hacia tiendas clonadas. Esto no solo afecta tus ingresos, sino que también expone a tus clientes potenciales a estafas.",
    explanationNo: "Aunque no hayas notado estos cambios, es crucial monitorear constantemente tus métricas de tráfico e ingresos. Cambios inesperados podrían ser la primera señal de actividades fraudulentas que afectan tu negocio en línea."
  },
  {
    type: "yesno",
    question: "¿Te han pedido los usuarios un descuento u oferta que tú no has anunciado?",
    correctAnswer: true,
    explanationYes: "Es probable que los usuarios hayan visto una oferta muy llamativa a través de anuncios en redes sociales u otros canales digitales. Estos anuncios falsos suelen ser creados por estafadores para atraer a clientes potenciales a sitios web fraudulentos.",
    explanationNo: "Aunque no hayas experimentado esto aún, es importante estar atento a cualquier mención de ofertas o descuentos que tu empresa no haya autorizado. Estos pueden ser signos de campañas fraudulentas que usan tu marca para engañar a los consumidores."
  },
  {
    type: "yesno",
    question: "¿El personal de tus tiendas físicas es preguntado por pedidos que no llegan?",
    correctAnswer: true,
    explanationYes: "Esta situación podría deberse a clientes que creen haber comprado en la marca oficial pero que en realidad han sido estafados por sitios web fraudulentos. Esto no solo genera frustración en los clientes, sino que también puede dañar la reputación de tu marca.",
    explanationNo: "Aunque no se haya presentado esta situación, es importante capacitar al personal de las tiendas físicas para identificar y manejar adecuadamente este tipo de consultas, ya que podrían ser indicadores de actividades fraudulentas en línea que afectan a tu marca."
  },
  {
    type: "yesno",
    question: "¿Has visto anuncios que parecen de tu marca pero no estas seguro si son tuyos? ",
    correctAnswer: true,
    explanationYes: "Estos podrían ser anuncios fraudulentos diseñados para ser vistos solo bajo ciertas condiciones. Si estas condiciones se cumplen, los usuarios pueden acabar en una tienda falsa creyendo que es la tienda oficial, lo que puede resultar en estafas y daño a la reputación de tu marca.",
    explanationNo: "Aunque no hayas detectado anuncios sospechosos, es crucial mantener una vigilancia constante. Los ciberdelincuentes a menudo utilizan técnicas sofisticadas para mostrar anuncios falsos solo a ciertos usuarios o en determinadas circunstancias, lo que dificulta su detección."
  },
  {
    type: "yesno",
    question: "¿Has visto algún dominio que usa tu marca como por ejemplo tumarca.shop, tumarca-outlet.es pero al entrar en el dominio este no funciona o da algún error?",
    correctAnswer: true,
    explanationYes: "Los dominios que usan los ciberdelincuentes para suplantar una marca pueden no funcionar cuando los encuentras o dar un error. Sin embargo, esto no implica que bajo otras condiciones los usuarios no puedan verlos. Pueden activarse a través de un enlace específico, un anuncio o desde una localización concreta, formando parte de una estrategia de fraude más amplia.",
    explanationNo: "Aunque no hayas encontrado dominios sospechosos, es importante realizar búsquedas regulares de dominios que puedan estar usando tu marca. Los ciberdelincuentes a menudo registran dominios similares a los de marcas conocidas para usarlos en sus esquemas de fraude, incluso si no están activos todo el tiempo."
  },
  {
    type: "trueFalse",
    question: "¿Podrías identificar en estas imágenes que es legítimo y qué no?",
    images: [
      "../images/Phishing05.png",
      "../images/Phishing06.png",
      "../images/Phishing07.png",
      "../images/Phishing08.png"
    ],
    correctAnswer: [false, false, true, false],
    explanationCorrect: "Has demostrado una buena capacidad para identificar intentos de phishing. Esta habilidad es crucial para proteger a tu empresa y a tus clientes de posibles fraudes en línea. Recuerda siempre verificar la autenticidad de los correos electrónicos, sitios web y anuncios relacionados con tu marca.",
    explanationIncorrect: "Identificar correctamente los intentos de phishing puede ser desafiante, pero es una habilidad crucial en el entorno digital actual. Te recomendamos prestar atención a detalles como la URL del sitio web, la calidad del diseño, la presencia de errores ortográficos y las solicitudes inusuales de información personal. Mejorar esta habilidad ayudará a proteger a tu empresa y a tus clientes de posibles fraudes en línea."
  }
];
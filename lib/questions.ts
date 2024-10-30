export const questions = [
  // {
  //   type: "yesno",
  //   question: "¿Tu empresa tiene implementada una política de contraseñas seguras?",
  //   correctAnswer: true,
  //   explanationYes: "Excelente. Una política de contraseñas seguras es fundamental para proteger los accesos a sistemas y datos críticos. Continúa manteniendo y actualizando esta política regularmente.",
  //   explanationNo: "Es crucial implementar una política de contraseñas seguras. Debe incluir requisitos de longitud mínima, caracteres especiales y cambios periódicos para mejorar significativamente la seguridad de tu empresa."
  // },
  // {
  //   type: "yesno",
  //   question: "¿Realizas copias de seguridad periódicas de la información crítica?",
  //   correctAnswer: true,
  //   explanationYes: "Muy bien. Las copias de seguridad regulares son esenciales para recuperar datos en caso de ciberataques, fallos técnicos o desastres naturales. Asegúrate de probar la restauración de estas copias periódicamente.",
  //   explanationNo: "Es altamente recomendable implementar un sistema de copias de seguridad periódicas. Esto te permitirá recuperar información crítica en caso de incidentes de seguridad o fallos técnicos, minimizando el riesgo de pérdida de datos."
  // },
  // {
  //   type: "yesno",
  //   question: "¿Tu personal ha recibido formación en ciberseguridad en el último año?",
  //   correctAnswer: true,
  //   explanationYes: "Excelente práctica. La formación regular en ciberseguridad mantiene a los empleados actualizados sobre las últimas amenazas y mejores prácticas de seguridad, fortaleciendo la primera línea de defensa de tu empresa.",
  //   explanationNo: "Es importante proporcionar formación en ciberseguridad al personal al menos una vez al año. Esto ayuda a crear conciencia sobre las amenazas actuales y reduce el riesgo de incidentes de seguridad causados por errores humanos."
  // },
  // {
  //   type: "yesno",
  //   question: "¿Tienes un protocolo de respuesta ante incidentes de seguridad?",
  //   correctAnswer: true,
  //   explanationYes: "Muy bien. Un protocolo de respuesta bien definido permite actuar rápidamente ante un incidente de seguridad, minimizando el impacto y el tiempo de recuperación. Asegúrate de revisarlo y actualizarlo regularmente.",
  //   explanationNo: "Es crucial desarrollar un protocolo de respuesta ante incidentes de seguridad. Esto te permitirá actuar de manera rápida y eficiente en caso de un ataque, reduciendo potencialmente el daño y el tiempo de recuperación."
  // },
  // {
  //   type: "yesno",
  //   question: "¿Utilizas autenticación de dos factores en los sistemas críticos?",
  //   correctAnswer: true,
  //   explanationYes: "Excelente medida de seguridad. La autenticación de dos factores añade una capa adicional de protección, reduciendo significativamente el riesgo de accesos no autorizados a tus sistemas críticos.",
  //   explanationNo: "Es altamente recomendable implementar la autenticación de dos factores en tus sistemas críticos. Esta medida proporciona una capa adicional de seguridad, dificultando significativamente los accesos no autorizados."
  // },
  {
    type: "yesno",
    question: "¿Mantienes actualizados todos tus sistemas y software?",
    correctAnswer: true,
    explanationYes: "Excelente práctica. Las actualizaciones regulares son cruciales para proteger contra vulnerabilidades conocidas que los ciberdelincuentes podrían explotar. Continúa manteniendo esta buena práctica.",
    explanationNo: "Es fundamental mantener todos los sistemas y software actualizados. Las actualizaciones a menudo incluyen parches de seguridad críticos que protegen contra vulnerabilidades conocidas, reduciendo significativamente el riesgo de ataques exitosos."
  },
  {
    type: "trueFalse",
    question: "Identifica cuáles de estos correos son intentos de phishing:",
    images: [
      "../images/Phishing01.png",
      "../images/Phishing02.png",
      "../images/Phishing03.png",
      "../images/Phishing04.png"
    ],
    correctAnswer: [true, true, false, true],
    explanationCorrect: "Has identificado correctamente los intentos de phishing. Es importante mantenerse alerta ante señales como URLs sospechosas, errores gramaticales, solicitudes urgentes de información sensible o remitentes que imitan a empresas legítimas.",
    explanationIncorrect: "Algunas identificaciones no son correctas. Recuerda que el phishing suele mostrar señales de alerta como URLs sospechosas, errores gramaticales, solicitudes urgentes de información sensible o remitentes que imitan a empresas legítimas. Es crucial mejorar la capacidad de identificar estos intentos para proteger la seguridad de tu empresa."
  }
];

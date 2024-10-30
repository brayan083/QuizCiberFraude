export const questions = [
  {
    type: "yesno",
    question: "¿Tu empresa tiene implementada una política de contraseñas seguras?",
    correctAnswer: true,
    explanation: "Una política de contraseñas seguras es fundamental para proteger los accesos a sistemas y datos críticos. Debe incluir requisitos de longitud mínima, caracteres especiales y cambios periódicos."
  },
  {
    type: "yesno",
    question: "¿Realizas copias de seguridad periódicas de la información crítica?",
    correctAnswer: true,
    explanation: "Las copias de seguridad regulares son esenciales para recuperar datos en caso de ciberataques, fallos técnicos o desastres naturales."
  },
  {
    type: "yesno",
    question: "¿Tu personal ha recibido formación en ciberseguridad en el último año?",
    correctAnswer: true,
    explanation: "La formación regular en ciberseguridad es crucial para mantener a los empleados actualizados sobre las últimas amenazas y mejores prácticas de seguridad."
  },
  {
    type: "yesno",
    question: "¿Tienes un protocolo de respuesta ante incidentes de seguridad?",
    correctAnswer: true,
    explanation: "Un protocolo de respuesta bien definido permite actuar rápidamente ante un incidente de seguridad, minimizando el impacto y el tiempo de recuperación."
  },
  {
    type: "yesno",
    question: "¿Utilizas autenticación de dos factores en los sistemas críticos?",
    correctAnswer: true,
    explanation: "La autenticación de dos factores añade una capa adicional de seguridad, reduciendo significativamente el riesgo de accesos no autorizados."
  },
  {
    type: "yesno",
    question: "¿Mantienes actualizados todos tus sistemas y software?",
    correctAnswer: true,
    explanation: "Las actualizaciones regulares son cruciales para proteger contra vulnerabilidades conocidas que los ciberdelincuentes podrían explotar."
  },
  {
    type: "trueFalse",
    question: "Identifica cuáles de estos correos son intentos de phishing:",
    images: [
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
      "https://images.unsplash.com/photo-1555421689-bb240a466588?w=800&q=80",
      "https://images.unsplash.com/photo-1555421689-3f034debb9ab?w=800&q=80"
    ],
    correctAnswer: [true, false, true, false],
    explanation: "El phishing suele mostrar señales de alerta como URLs sospechosas, errores gramaticales, solicitudes urgentes de información sensible o remitentes que imitan a empresas legítimas."
  }
];
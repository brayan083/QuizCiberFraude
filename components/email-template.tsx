import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  empresa: string;
  email: string;
  telefono: string;
  puntuacion: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  empresa,
  email,
  telefono,
  puntuacion,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
    <h1 style={{ color: '#4CAF50' }}>¡Hola, {firstName}!</h1>
    
    <h2 style={{ color: '#4CAF50' }}>Detalles del Usuario</h2>
    <ul>
      <li><strong>Nombre:</strong> {firstName}</li>
      <li><strong>Empresa:</strong> {empresa}</li>
      <li><strong>Email:</strong> {email}</li>
      <li><strong>Teléfono:</strong> {telefono}</li>
    </ul>
    
    <h2 style={{ color: '#4CAF50' }}>Resultados del Cuestionario</h2>
    <p><strong>Puntuación:</strong> {puntuacion}</p>

  </div>
);
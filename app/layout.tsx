import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Test de Ciberseguridad Empresarial | Súmate',
  description: 'Evalúa el nivel de protección de tu empresa contra el ciberfraude con nuestro test interactivo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="font-montserrat">{children}</body>
    </html>
  );
}
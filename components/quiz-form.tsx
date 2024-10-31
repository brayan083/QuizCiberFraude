"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Trophy, Send } from "lucide-react";
// import { saveQuizResult } from "@/lib/storage";

interface QuizFormProps {
  score: number;
  totalQuestions: number;
  userName: string;
}

export function QuizForm({ score, totalQuestions, userName }: QuizFormProps) {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // await saveQuizResult({
      //   name: userName,
      //   score,
      //   totalQuestions,
      //   ...formData,
      // });
      // soy el cambio

      // Send email using Resend API
      const emailBody = {
        nombre: userName,
        empresa: formData.company,
        email: formData.email,
        telefono: formData.phone,
        puntuacion: `${score}/${totalQuestions} (${Math.round(
          (score / totalQuestions) * 100
        )}%)`,
      };

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailBody: emailBody }),
      });

      // Verifica si la respuesta es válida y no está vacía
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error saving quiz result:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const percentage = Math.round((score / totalQuestions) * 100);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white shadow-lg rounded-2xl text-center">
            <Trophy className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Gracias por participar!
            </h2>
            <p className="text-xl text-gray-600">
              Nos pondremos en contacto contigo pronto con tu valoración
              personalizada.
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-white shadow-lg rounded-2xl">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Enhorabuena, {userName}!
            </h2>
            <div className="text-xl text-gray-600">
              Tu puntuación: {score} de {totalQuestions} ({percentage}%)
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              ¿Quieres recibir una valoración personalizada?
            </h3>
            <p className="text-gray-600">
              Déjanos tus datos y nuestro equipo de expertos en ciberseguridad
              te contactará con un análisis detallado y recomendaciones
              específicas para tu empresa.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Empresa"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                required
                className="w-full p-3"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full p-3"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="w-full p-3"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Solicitar Valoración"}
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

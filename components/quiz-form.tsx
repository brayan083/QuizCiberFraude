"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Trophy, Send } from "lucide-react";
import Posts from "./posts";

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
    sendResults: true,
    talkToAnalyst: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);


    try {
      // Send email using Resend API
      const emailBody = {
        nombre: userName,
        empresa: formData.company,
        email: formData.email,
        telefono: formData.phone,
        puntuacion: `${score}/${totalQuestions} (${Math.round(
          (score / totalQuestions) * 100
        )}%)`,
        sendResults: formData.sendResults,
        talkToAnalyst: formData.talkToAnalyst,
      };

      const responseCreateUser = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/createUser`, {
      // const responseCreateUser = await fetch(`https://quiz-ciber-fraude.vercel.app/api/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          company: formData.company,
          email: formData.email,
          telefono: Number(formData.phone),
          score: `${score}/${totalQuestions} (${Math.round(
            (score / totalQuestions) * 100
          )}%)`,
          talkToAnalyst: formData.talkToAnalyst,
        }),
      });

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sendemail`, {
      // const response = await fetch(`https://quiz-ciber-fraude.vercel.app/api/sendemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailBody: emailBody }),
      });

      // Verifica si la respuesta es válida y no está vacía
      if (!responseCreateUser.ok) {
        throw new Error(`HTTP error! status: ${responseCreateUser.status}`);
      }
      // Verifica si la respuesta es válida y no está vacía
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data);

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error saving quiz result:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const porcentaje = Math.round((score / totalQuestions) * 100);
  // console.log("porcentaje", porcentaje);

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
              {formData.sendResults && formData.talkToAnalyst
                ? "Nos pondremos en contacto contigo pronto con tu valoración personalizada."
                : formData.sendResults
                  ? "Te enviaremos los resultados a tu email."
                  : formData.talkToAnalyst
                    ? "Un analista se pondrá en contacto contigo para verificar si tu web tiene ciberfraude."
                    : "Gracias por participar en el quiz."}

            </p>

            <Posts />
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
              {userName.toUpperCase()}, AQUÍ TIENES TU RESULTADO
            </h2>
            <div className="text-xl text-gray-600">
              Tu puntuación: {porcentaje}%
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {porcentaje >= 60 && (
                <>
                  Parece que en este momento no eres víctima de ciberfraude. Debes estar alerta por si más adelante detectas alguno de los casos comentados en el quiz.
                </>
              )}
              {porcentaje >= 30 && porcentaje < 60 && (
                <>
                  Puedes estar sufriendo un ataque de suplantación de marca, sería conveniente una revisión para descartar. En Súmate contamos con un servicio de ciberfraude y podemos analizar tu caso para que salgas de dudas.
                </>
              )}
              {porcentaje < 30 && (
                <>
                  Hay varios indicadores que nos hacen pensar que tu marca está siendo víctima de ciberfraude. Podemos ayudarte para detectar de dónde viene el problema y atajarlo.
                </>
              )}
            </h3>


          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h3>
              Rellena el siguiente formulario y te enviaremos los resultados vía email.
            </h3>
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
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                required
                className="w-full p-3"
              />
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.sendResults}
                  className="form-checkbox h-5 w-5 text-blue-600"
                  onChange={(e) =>
                    setFormData({ ...formData, sendResults: e.target.checked })
                  }
                />
                <span className="text-gray-700">
                  ¿Desea que le envíen los resultados al email?
                </span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.talkToAnalyst}
                  className="form-checkbox h-5 w-5 text-blue-600"
                  onChange={(e) =>
                    setFormData({ ...formData, talkToAnalyst: e.target.checked })
                  }
                />
                <span className="text-gray-700">
                  Quiero hablar con un analista de Súmate para que verifique si mi web tiene ciberfraude.
                </span>
              </label>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Tras la solicitud de resultados entras a formar parte de la base de datos de Súmate para comunicaciones.
            </p>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar resultados"}
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <Posts />
        </Card>
      </div>
    </div>
  );
}

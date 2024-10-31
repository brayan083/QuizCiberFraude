"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Shield, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { QuizForm } from "@/components/quiz-form";
import { questions } from "@/lib/questions";
import Image from "next/image";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [currentStep, setCurrentStep] = useState(-1);
  const [answers, setAnswers] = useState<boolean[][]>([]);
  const [score, setScore] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers];
    if (!newAnswers[currentStep]) {
      newAnswers[currentStep] = [];
    }
    newAnswers[currentStep][0] = answer; // Asigna el valor booleano a la primera posición del array
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowForm(true);
    }
    setIsVerified(false);
  };

  const handleVerify = () => {
    if (isAnswerCorrect(answers[currentStep], currentQuestion.correctAnswer)) {
      setScore(score + 1);
    }
    setIsVerified(true);
  };

  const arraysAreEqual = (arr1: boolean[], arr2: boolean[]): boolean => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  const isAnswerCorrect = (
    answer: boolean[],
    correctAnswer: boolean | boolean[]
  ): boolean => {
    if (Array.isArray(correctAnswer)) {
      return arraysAreEqual(answer, correctAnswer);
    } else {
      return answer[0] === correctAnswer;
    }
  };

  if (currentStep === -1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Test de Ciberseguridad Empresarial
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Evalúa el nivel de protección de tu empresa contra el ciberfraude
            </p>
          </div>

          <Card className="p-8 bg-white shadow-lg rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    7 Preguntas Clave
                  </h3>
                  <p className="text-gray-600">
                    Evaluación completa de tus prácticas de seguridad
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Resultados Instantáneos
                  </h3>
                  <p className="text-gray-600">
                    Obtén una evaluación inmediata de tu nivel de protección
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Asesoramiento Personalizado
                  </h3>
                  <p className="text-gray-600">
                    Recibe recomendaciones específicas para tu empresa
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Para comenzar, introduce tu nombre:
                </label>
                <Input
                  id="name"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Tu nombre"
                  className="mb-4"
                  required
                />
              </div>
            </div>

            <Button
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
              onClick={() => setCurrentStep(0)}
              disabled={!userName.trim()}
            >
              Comenzar Evaluación
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  if (showForm) {
    return (
      <QuizForm
        score={score}
        totalQuestions={questions.length}
        userName={userName}
      />
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-200">
              Pregunta {currentStep + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-100">
              {Math.round(((currentStep + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-100 rounded-full h-2 transition-all duration-300"
              style={{
                width: `${((currentStep + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <Card className="p-8 bg-white shadow-lg rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {currentQuestion.question}
          </h2>

          {currentQuestion.type === "yesno" ? (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {!isVerified && (
                <>
                  <Button
                    className={`py-6 text-lg ${
                      answers[currentStep]?.[0] === true
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                    onClick={() => handleAnswer(true)}
                  >
                    Sí
                  </Button>
                  <Button
                    className={`py-6 text-lg ${
                      answers[currentStep]?.[0] === false
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                    onClick={() => handleAnswer(false)}
                  >
                    No
                  </Button>
                </>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 mb-6">
              {currentQuestion.images &&
                currentQuestion.images.map((image, index) => (
                  <div
                    key={index}
                    className="space-y-4 my-5 border-2 rounded-lg p-4"
                  >
                    <Image
                      src={image}
                      alt={`Imagen ${index + 1}`}
                      className="w-full rounded-lg shadow-md"
                      width={700}
                      height={475}
                    />
                    <div className="flex justify-center space-x-4 mb-10">
                      <Button
                        className={`${
                          answers[currentStep]?.[index] === true
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        } py-4 px-8 text-xl`}
                        onClick={() => {
                          const newAnswers = [...answers];
                          if (!newAnswers[currentStep]) {
                            newAnswers[currentStep] = [];
                          }
                          newAnswers[currentStep][index] = true;
                          setAnswers(newAnswers);
                        }}
                        disabled={isVerified}
                      >
                        Verdadero
                      </Button>
                      <Button
                        className={`${
                          answers[currentStep]?.[index] === false
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        } py-4 px-8 text-xl`}
                        onClick={() => {
                          const newAnswers = [...answers];
                          if (!newAnswers[currentStep]) {
                            newAnswers[currentStep] = [];
                          }
                          newAnswers[currentStep][index] = false;
                          setAnswers(newAnswers);
                        }}
                        disabled={isVerified}
                      >
                        Falso
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {answers[currentStep] !== undefined && (
            <>
              <div className="gap-4 mb-6">
                {!isVerified && (
                  <div className="flex justify-center">
                    <Button
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                      onClick={handleVerify}
                    >
                      Verificar
                    </Button>
                  </div>
                )}
                {isVerified && (
                  <>
                    <div className="p-4 bg-gray-50 rounded-lg mb-6">
                      <p className="text-gray-700">
                        {isAnswerCorrect(
                          answers[currentStep],
                          currentQuestion.correctAnswer
                        )
                          ? currentQuestion.explanationYes ||
                            currentQuestion.explanationCorrect
                          : currentQuestion.explanationNo ||
                            currentQuestion.explanationIncorrect}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg mt-4"
                        onClick={handleNext}
                      >
                        {currentStep < questions.length - 1
                          ? "Siguiente"
                          : "Ver Resultados"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}

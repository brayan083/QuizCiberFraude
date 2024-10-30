export interface QuizResult {
  name: string;
  score: number;
  totalQuestions: number;
  company?: string;
  email?: string;
  phone?: string;
  timestamp: string;
}

export function saveQuizResult(data: Omit<QuizResult, 'timestamp'>): void {
  const result: QuizResult = {
    ...data,
    timestamp: new Date().toISOString(),
  };

  const results = getQuizResults();
  results.push(result);
  localStorage.setItem('quizResults', JSON.stringify(results));
}

export function getQuizResults(): QuizResult[] {
  const results = localStorage.getItem('quizResults');
  return results ? JSON.parse(results) : [];
}
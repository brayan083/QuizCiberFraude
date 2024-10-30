import { createClient } from '@libsql/client';

const client = createClient({
  url: 'file:local.db',
});

export async function initDb() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS quiz_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      score INTEGER NOT NULL,
      total_questions INTEGER NOT NULL,
      company TEXT,
      email TEXT,
      phone TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export async function saveQuizResult(data: {
  name: string;
  score: number;
  totalQuestions: number;
  company?: string;
  email?: string;
  phone?: string;
}) {
  await client.execute({
    sql: `INSERT INTO quiz_results (name, score, total_questions, company, email, phone)
          VALUES (?, ?, ?, ?, ?, ?)`,
    args: [
      data.name,
      data.score,
      data.totalQuestions,
      data.company || null,
      data.email || null,
      data.phone || null,
    ],
  });
}
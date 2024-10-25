export const materias = [
  "Artificial Intelligence and Chatbot",
  "Domain Driven Design Using Java",
  "Computational Thinking Using Python",
  "Software Engineering and Business Model",
  "Building Relational Database",
  "Front-End Design Engineering",
] as const;
export type Materia = (typeof materias)[number];

export const autores = [
  "Gustavo Dias",
  "Júlia Monteiro",
  "Júlia Angelozi",
  "Felipe Ribeiro",
  "Sofia Petruk",
] as const;
export type Autor = (typeof autores)[number];

export const tiposTarefa = [
  "Challenge",
  "Global Solution",
  "Checkpoints",
] as const;
export type TipoTarefa = (typeof tiposTarefa)[number];

export type Tarefa = {
  id: number;
  autor: Autor;
  titulo: string;
  materia: Materia;
  tipo: TipoTarefa;
  descricao: string;
  foto?: string;
  semestre?: 1 | 2;
  nota: number;
  feedback?: string;
};

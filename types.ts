
export enum CategoryType {
  NOUN = 'Sự vật',
  VERB = 'Hoạt động',
  ADJECTIVE = 'Đặc điểm'
}

export interface WordItem {
  word: string;
  example: string;
  sentence: string;
  imageUrl: string;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching';
  question: string;
  options?: string[];
  answer: string;
  hint?: string;
}

export interface WeeklyLesson {
  week: number;
  title: string;
  content: string;
  exercises: Question[];
}

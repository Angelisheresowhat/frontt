import { Question } from './question';
import { Lesson } from './lesson';

export class Quiz {
  id: number;
  title: string;
  quizDescription: string;
  passingScore: number;
  questions: Question[];
  lesson: Lesson;

  constructor(
    id: number ,
    title: string = '',
    quizDescription: string = '',
    passingScore: number = 0,
    questions: Question[] = [],
    lesson: Lesson 
  ) {
    this.id = id;
    this.title = title;
    this.quizDescription = quizDescription;
    this.passingScore = passingScore;
    this.questions = questions;
    this.lesson = lesson;
  }
}

import { Answer } from './answer';
import { Quiz } from './quiz';

export class Question {
  id: number;
  questions: string;
  points: number;
  answers: Answer[];
  quiz: Quiz;

  constructor(
    id: number ,
    questions: string = '',
    points: number = 0,
    answers: Answer[] = [],
    quiz: Quiz 
  ) {
    this.id = id;
    this.questions = questions;
    this.points = points;
    this.answers = answers;
    this.quiz = quiz;
  }
}

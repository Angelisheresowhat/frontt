import { Question } from './question';

export class Answer {
  id: number;
  answerText: string;
  correct: boolean;
  question: Question;

  constructor(
    id: number ,
    answerText: string = '',
    correct: boolean = false,
    question: Question 
  ) {
    this.id = id;
    this.answerText = answerText;
    this.correct = correct;
    this.question = question;
  }
}

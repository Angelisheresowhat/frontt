import { Chapter } from './chapter';
import { Quiz } from './quiz';

export class Lesson {
  id: number;
  lessonTitle: string;
  lessonDescription: string;
  chapters: Chapter[];
  quizzes: Quiz[];

  constructor(
    id: number ,
    lessonTitle: string = '',
    lessonDescription: string = '',
    chapters: Chapter[] = [],
    quizzes: Quiz[] = []
  ) {
    this.id = id;
    this.lessonTitle = lessonTitle;
    this.lessonDescription = lessonDescription;
    this.chapters = chapters;
    this.quizzes = quizzes;
  }
}

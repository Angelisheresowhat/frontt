import { Lesson } from './lesson';

export class Chapter {
  id: number;
  title: string;
  video: string;
  description: string;
  lesson: Lesson;

  constructor(
    id: number ,
    title: string = '',
    video: string = '',
    description: string = '',
    lesson: Lesson 
  ) {
    this.id = id;
    this.title = title;
    this.video = video;
    this.description = description;
    this.lesson = lesson;
  }
}

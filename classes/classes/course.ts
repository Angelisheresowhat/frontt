import { Course } from "../../course";

export class CourseService {
    id: number;
    title: string;
    category: string;
    description: string;
    difficulty: number;
    level: number;
    premium: boolean;
    image: string; 
    recommendedCourses: Course[];
  
    constructor(
      id: number ,
      title: string = '',
      category: string = '',
      description: string = '',
      difficulty: number = 0,
      level: number = 0,
      premium: boolean = false,
      image: string = '',
      recommendedCourses: Course[] = []
    ) {
      this.id = id;
      this.title = title;
      this.category = category;
      this.description = description;
      this.difficulty = difficulty;
      this.level = level;
      this.premium = premium;
      this.image = image;
      this.recommendedCourses = recommendedCourses;
    }
  }
  
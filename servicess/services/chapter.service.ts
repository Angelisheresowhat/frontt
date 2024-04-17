import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chapter } from '../../classes/classes/chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private apiUrl = 'http://localhost:8080/api/v1/chapters';

  constructor(private http: HttpClient) { }

  getChapters(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(`${this.apiUrl}`);
  }

  getChapter(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.apiUrl}/${id}`);
  }

  createChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>(`${this.apiUrl}`, chapter);
  }

  updateChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.put<Chapter>(`${this.apiUrl}/${chapter.id}`, chapter);
  }

  deleteChapter(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

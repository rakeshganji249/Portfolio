import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from './models/project.model';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'assets/data/projects.json';
 
  constructor(private http: HttpClient) { }

  getProjects(): Observable<any[]> {
    return this.http.get<Project[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching projects:', error);
        
        return of([
          { title: 'Sample Project', description: 'This is a fallback project.', technologies: ['Angular', 'TypeScript'] }
        ]);
      })
    );
  }
}

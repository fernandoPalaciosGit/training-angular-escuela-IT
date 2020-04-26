import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  readonly API = 'http://localhost:4000';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  private getURLTodos(): string {
    return `${ this.API }/todos`;
  }

  getTodoById(id): string {
    return `${ this.getURLTodos() }/${ id }`;
  }

  getAllTodos(): Observable<Todos[]> {
    return this.httpClient.get<Todos[]>(this.getURLTodos());
  }

  deleteTodo(id: number) {
    return this.httpClient.delete(this.getTodoById(id));
  }

  createTodo(todo: Todos): Observable<Todos> {
    return this.httpClient.post<Todos>(this.getURLTodos(), todo);
  }
}

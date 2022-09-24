import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = `${environment.backendUrl}${environment.api}${environment.version}todos`;

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<Todo[]>(this.url);
  }

  addItem(value: string) {
    return this.http.post<Todo>(this.url, { value });
  }

  updateItem(value: Todo) {
    return this.http.put<Todo>(`${this.url}/${value.id}`, value);
  }

  deleteItem(value: Todo) {
    return this.http.delete(`${this.url}/${value.id}`);
  }
}

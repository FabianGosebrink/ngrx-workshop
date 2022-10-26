import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import * as todoActions from '../../store/todo.actions';
import { getAllItems, getLoading } from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.css'],
})
export class TodoContentComponent implements OnInit {
  items$: Observable<Todo[]>;

  loading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.items$ = this.store.pipe(select(getAllItems));
    this.loading$ = this.store.pipe(select(getLoading));

    this.store.dispatch(todoActions.loadAllTodos());
  }

  addTodo(item: string) {
    this.store.dispatch(todoActions.addTodo({ payload: item }));
  }

  markAsDone(item: Todo) {
    this.store.dispatch(todoActions.setAsDone({ payload: item }));
  }

  deleteTodo(item: Todo) {
    this.store.dispatch(todoActions.deleteTodo({ payload: item.id }));
  }
}

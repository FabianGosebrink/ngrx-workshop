import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, switchMap } from 'rxjs';
import { TodoService } from '../services/todo.service';
import * as todoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.loadAllTodos),
      switchMap((action) =>
        this.todoService
          .getItems()
          .pipe(
            map((todos) => todoActions.loadAllTodosFinished({ payload: todos }))
          )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.addTodo),
      map((action) => action.payload),
      switchMap((payload) =>
        this.todoService
          .addItem(payload)
          .pipe(map((todo) => todoActions.addTodoFinished({ payload: todo })))
      )
    )
  );

  markAsDone$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.setAsDone),
      map((action) => action.payload),
      switchMap((payload) =>
        this.todoService
          .updateItem(payload)
          .pipe(map((todo) => todoActions.setAsDoneFinished({ payload: todo })))
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.deleteTodo),
      concatMap(({ payload }) =>
        this.todoService
          .deleteItem(payload)
          .pipe(map((todo) => todoActions.deleteTodoFinished({ payload })))
      )
    )
  );
}

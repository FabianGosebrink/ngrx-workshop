import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const loadAllTodos = createAction('[Todo] Load Todos');

export const loadAllTodosFinished = createAction(
  '[Todo] Load Todos Finished',
  props<{ payload: Todo[] }>()
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ payload: string }>()
);

export const addTodoFinished = createAction(
  '[Todo] Add Todo Finished',
  props<{ payload: Todo }>()
);

export const setAsDone = createAction(
  '[Todo] SetAsDone',
  props<{ payload: Todo }>()
);

export const setAsDoneFinished = createAction(
  '[Todo] SetAsDone Finished',
  props<{ payload: Todo }>()
);

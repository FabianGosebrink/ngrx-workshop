import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';
import * as todoActions from './todo.actions';

export const featureName = 'todo';

export const getTodoState = createFeatureSelector(featureName);

export interface ReducerTodoState {
  items: Todo[];
  selectedItem: Todo;
  loading: boolean;
}

export const initialState: ReducerTodoState = {
  items: [],
  selectedItem: null,
  loading: false,
};

export const todoReducer = createReducer(
  initialState,

  on(todoActions.loadAllTodos, todoActions.addTodo, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(todoActions.loadAllTodosFinished, (state, { payload }) => ({
    ...state,
    loading: false,
    items: [...payload],
  })),

  on(todoActions.addTodoFinished, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      items: [...state.items, payload],
    };
  })
);

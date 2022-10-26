import { createReducer, on } from '@ngrx/store';
import * as todoActions from './todo.actions';
import { initialState } from './todo.state';

export const todoReducer = createReducer(
  initialState,

  on(
    todoActions.loadAllTodos,
    todoActions.addTodo,
    todoActions.setAsDone,
    todoActions.deleteTodo,
    (state) => {
      return {
        ...state,
        loading: true,
      };
    }
  ),

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
  }),

  on(todoActions.setAsDoneFinished, (state, { payload }) => {
    const index = state.items.findIndex((x) => x.id === payload.id);
    const itemsClone = [...state.items];
    itemsClone[index] = payload;
    return {
      ...state,
      items: itemsClone,
      loading: false,
    };
  }),

  on(todoActions.deleteTodoFinished, (state, { payload }) => {
    const items = state.items.filter((x) => x.id !== payload);

    return {
      ...state,
      loading: false,
      items: [...items],
    };
  })
);

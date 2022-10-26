import { createSelector } from '@ngrx/store';
import { getTodoState, ReducerTodoState } from './todo.state';

export const getAllItems = createSelector(
  getTodoState,
  (state: ReducerTodoState) => state.items
);

export const getLoading = createSelector(
  getTodoState,
  (state: ReducerTodoState) => state.loading
);

export const getSelectedItem = createSelector(
  getTodoState,
  (state: ReducerTodoState) => state.selectedItem
);

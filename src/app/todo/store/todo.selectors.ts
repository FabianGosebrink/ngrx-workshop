import { createSelector } from '@ngrx/store';
import * as fromTodoReducer from './todo.reducer';

export const getAllItems = createSelector(
  fromTodoReducer.getTodoState,
  (state: fromTodoReducer.ReducerTodoState) => state.items
);

export const getLoading = createSelector(
  fromTodoReducer.getTodoState,
  (state: fromTodoReducer.ReducerTodoState) => state.loading
);

export const getSelectedItem = createSelector(
  fromTodoReducer.getTodoState,
  (state: fromTodoReducer.ReducerTodoState) => state.selectedItem
);

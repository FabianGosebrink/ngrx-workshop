import { createFeatureSelector } from '@ngrx/store';
import { Todo } from '../models/todo';

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

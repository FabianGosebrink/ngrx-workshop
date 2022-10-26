import { Todo } from './../models/todo';
import { addTodoFinished, loadAllTodosFinished } from './todo.actions';
import { todoReducer } from './todo.reducer';
import { initialState } from './todo.state';

describe('TodoReducer', () => {
  describe('loadAllTodosFinished', () => {
    it('sets todos on stage when payload is passed', () => {
      // arrange
      const payload = [
        { id: 'some-id', value: 'Wash car', done: false, created: new Date() },
      ];
      const action = loadAllTodosFinished({
        payload,
      });

      // act
      const result = todoReducer(initialState, action);

      // assert
      expect(result).toEqual({
        loading: false,
        items: payload,
        selectedItem: null,
      });
    });
  });

  describe('addTodoFinished', () => {
    it('adds todo to state --> items', () => {
      // arrange
      const payload: Todo = {
        id: 'some-id',
        value: 'Wash car',
        done: false,
        created: new Date(),
      };
      const action = addTodoFinished({
        payload,
      });

      // act
      const result = todoReducer(initialState, action);

      // assert
      expect(result).toEqual({
        loading: false,
        items: [payload],
        selectedItem: null,
      });
    });
  });
});

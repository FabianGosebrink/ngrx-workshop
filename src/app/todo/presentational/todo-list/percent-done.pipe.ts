import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../models/todo';

@Pipe({
  name: 'percentDone',
})
export class PercentDonePipe implements PipeTransform {
  transform(allTodos: Todo[]): number {
    if (allTodos.length) {
      const allDone = allTodos.filter((todo) => todo.done);

      return (allDone.length / allTodos.length) * 100;
    } else {
      return 0;
    }
  }
}

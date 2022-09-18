import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() items: Todo[] = [];
  @Output() markAsDone = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items?.currentValue) {
      changes.items.currentValue.sort((a: Todo) => (a.done ? 1 : -1));
    }
  }

  ngOnInit(): void {}

  markDone(item: Todo, event: Event) {
    const checkBox = event.target as HTMLInputElement;
    const copy = { ...item };
    copy.done = checkBox.checked;
    this.markAsDone.emit(copy);
  }
}

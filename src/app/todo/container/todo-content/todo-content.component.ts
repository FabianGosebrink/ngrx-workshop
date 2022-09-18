import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.css'],
})
export class TodoContentComponent implements OnInit {
  items: Todo[];

  loading = false;

  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.getData();
  }

  addTodo(item: string) {
    this.loading = true;
    this.service.addItem(item).subscribe(() => this.getData());
  }

  markAsDone(item: Todo) {
    this.loading = true;
    this.service.updateItem(item).subscribe(() => this.getData());
  }

  deleteTodo(item: Todo) {
    this.loading = true;
    this.service.deleteItem(item).subscribe(() => this.getData());
  }

  private getData() {
    this.service
      .getItems()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((items) => {
        this.items = items;
      });
  }
}

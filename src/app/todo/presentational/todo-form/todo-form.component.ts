import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface TodoForm {
  todoText: FormControl<string>;
}

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() todoAdded = new EventEmitter<string>();

  form: FormGroup<TodoForm> = null;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      todoText: '',
    });
  }

  addTodo() {
    if (this.form.value.todoText) {
      this.todoAdded.emit(this.form.value.todoText);
      this.form.reset();
    }
  }
}

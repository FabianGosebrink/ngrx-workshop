import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TodoContentComponent } from './container/todo-content/todo-content.component';
import { TodoFormComponent } from './presentational/todo-form/todo-form.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';
import { PercentDonePipe } from './presentational/todo-list/percent-done.pipe';

const routes: Routes = [{ path: '', component: TodoContentComponent }];

@NgModule({
  declarations: [TodoContentComponent, TodoListComponent, TodoFormComponent, PercentDonePipe],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class TodoModule {}

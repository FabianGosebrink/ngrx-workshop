import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoContentComponent } from './container/todo-content/todo-content.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';

const routes: Routes = [{ path: '', component: TodoContentComponent }];

@NgModule({
  declarations: [TodoContentComponent, TodoListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TodoModule {}

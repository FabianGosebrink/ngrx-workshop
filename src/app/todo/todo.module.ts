import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoContentComponent } from './container/todo-content/todo-content.component';
import { TodoFormComponent } from './presentational/todo-form/todo-form.component';
import { PercentDonePipe } from './presentational/todo-list/percent-done.pipe';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';
import { TodoEffects } from './store/todo.effects';
import { todoReducer } from './store/todo.reducer';
import { featureName } from './store/todo.state';

const routes: Routes = [{ path: '', component: TodoContentComponent }];

@NgModule({
  declarations: [
    TodoContentComponent,
    TodoListComponent,
    TodoFormComponent,
    PercentDonePipe,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, todoReducer),
    EffectsModule.forFeature([TodoEffects]),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
})
export class TodoModule {}

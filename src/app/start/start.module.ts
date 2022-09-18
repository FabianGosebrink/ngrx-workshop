import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartContentComponent } from './container/start-content/start-content.component';

export const routes: Routes = [{ path: '', component: StartContentComponent }];

@NgModule({
  declarations: [StartContentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StartModule {}

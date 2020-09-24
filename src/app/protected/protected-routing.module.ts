import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './to-do-list/components/add-task/add-task.component';
import { TaskListComponent } from './to-do-list/components/task-list/task-list.component';

const routes: Routes = [
  { path: 'task-list', loadChildren: () => import('./to-do-list/to-do-list.module').then(m => m.ToDoListModule) },
  { path: '', redirectTo: 'task-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }

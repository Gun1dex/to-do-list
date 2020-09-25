import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent, data: {animation: 'Add-task'} },
  { path: '', component: TaskListComponent, data: {animation: 'Task-list'}},
  { path: 'detail/:id', component: TaskDetailComponent, data: {animation: 'Detail'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRoutingModule { }

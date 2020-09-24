import { NgModule } from '@angular/core';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { MatTableModule } from '@angular/material/table';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AddTaskComponent,
    TaskListComponent,
    TaskDetailComponent
  ],
  imports: [
    SharedModule,
    ToDoListRoutingModule,
    MatTableModule
  ]
})
export class ToDoListModule { }

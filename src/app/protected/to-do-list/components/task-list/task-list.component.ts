import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/core/models/task';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['nom', 'description', 'modifier', 'supprimer'];

  tasks : ITask[];
  sub: Subscription;
  loading = true;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  deleteTask(id: string) {
    return this.taskService.deleteTask(id);
  }

  loadData() {
    this.sub = this.taskService.getTasks().subscribe((data) => {
        this.tasks = data;
        this.loading = false;
    });
  }

  hideSpinner() {

  }
}

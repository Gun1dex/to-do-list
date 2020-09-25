import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/core/models/task';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  taskDetail: FormGroup;
  iTask: Observable<ITask>;
  id_param: string;

  constructor(private taskService: TaskService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.taskDetail = this.formBuilder.group({
      nom: ['', Validators.required],
      description: [''],
    });
    const id = this.route.snapshot.params["id"];
    this.taskService.getTask(id).subscribe((data) => {
      this.taskDetail.get('nom').setValue(data.nom)
      this.taskDetail.get('description').setValue(data.description);
    })
    this.id_param = id;
  }

  onSubmit() {
    this.taskService.modifyTask(this.id_param, this.taskDetail.get("nom").value, this.taskDetail.get("description").value);
    this.router.navigate(['toDoList/task-list']);
  }
}

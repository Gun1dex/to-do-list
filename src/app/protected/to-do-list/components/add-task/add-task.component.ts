import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { TaskService } from 'src/app/core/services/task.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  taskForm: FormGroup;
  userList: IUser[];
  formIsCompleted = false;

  constructor(private authService: AuthService, private taskService: TaskService, private formBuilder: FormBuilder, private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      userSelected: ['',Validators.required]
    });

    this.getAllUsers();
  }

  addTask() {
    this.formIsCompleted = !this.taskForm.get('nom').invalid && !this.taskForm.get('description').invalid && !this.taskForm.get('userSelected').invalid;

    if(this.formIsCompleted) {
      this.taskService.createNewTask(
        this.taskForm.get('userSelected').value,
        this.taskForm.get('nom').value,
        this.taskForm.get('description').value
      );
      this.router.navigate(['/toDoList/task-list']);
    }
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.userList = data;
      console.log(data);
    });
  }

}

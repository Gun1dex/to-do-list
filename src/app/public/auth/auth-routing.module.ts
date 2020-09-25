import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent, data: {animation: 'Signin'} },
  { path: 'signup', component: RegisterComponent, data: {animation: 'Signup'} },
  { path: '', redirectTo: 'signin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

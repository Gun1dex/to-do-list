import { NgModule } from '@angular/core';
import { ProtectedRoutingModule } from './protected-routing.module';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    ToDoListModule
  ]
})
export class ProtectedModule { }

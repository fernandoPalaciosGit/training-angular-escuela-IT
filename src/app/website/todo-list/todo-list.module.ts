import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from '@todo-list/components/todo-list/todo-list.component';
import { TodoComponent } from '@todo-list/components/todo/todo.component';
import { TodosService } from '@todo-list/services/todos.service';
import { SharedModule } from '@shares/shared.module';
import { MaterialModule } from '@shares/material.module';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    TodosService
  ]
})
export class TodoListModule {
}

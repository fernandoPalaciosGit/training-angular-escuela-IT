import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from '@todo-list/components/todo-list/todo-list.component';
import { TodoComponent } from '@todo-list/components/todo/todo.component';
import { TodosService } from '@todo-list/services/todos.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TodosService
  ]
})
export class TodoListModule { }

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../../models/todos';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todos[]>;
  selectedTodoText: string;

  constructor(
    private todosService: TodosService
  ) {
  }

  ngOnInit(): void {
    this.todos$ = this.todosService.getAllTodos();
  }

  deleteTodo(idTodo: number) {
    this.todosService.deleteTodo(idTodo);
  }

  createTodo() {
    this.todosService.createTodo({
      id: 654,
      title: this.selectedTodoText,
      body: this.selectedTodoText,
      userId: 654
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '@todo-list/models/todos';
import { TodosService } from '@todo-list/services/todos.service';

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
    this.resetTodos();
  }

  private resetTodos() {
    this.todos$ = this.todosService.getAllTodos();
  }

  deleteTodo(idTodo: number) {
    this.todosService.deleteTodo(idTodo)
      .subscribe(this.resetTodos.bind(this));
  }

  createTodo() {
    this.todosService.createTodo({
      title: this.selectedTodoText
    }).subscribe(this.resetTodos.bind(this));
  }

  updateTodo(todo: Todos) {
    this.todosService.updateTodo(todo)
      .subscribe(this.resetTodos.bind(this));
  }
}

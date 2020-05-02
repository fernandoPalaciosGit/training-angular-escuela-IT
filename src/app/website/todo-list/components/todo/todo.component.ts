import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from '@todo-list/models/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todos;
  @Output() deletedTodo = new EventEmitter<number>();
  @Output() updateTodo = new EventEmitter<Todos>();

  constructor() {
  }
}

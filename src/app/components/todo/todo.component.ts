import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from '../../models/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todos;
  @Output() deletedTodo = new EventEmitter<number>();
  @Output() updateTodo = new EventEmitter<Todos>();

  constructor() {
  }

  ngOnInit(): void {
  }
}

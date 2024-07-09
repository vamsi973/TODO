import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-detailed',
  templateUrl: './todo-detailed.component.html',
  styleUrls: ['./todo-detailed.component.css']
})
export class TodoDetailedComponent {
  @Input() todo = new Todo();
  @Output() changesInTodo:EventEmitter<Todo> = new EventEmitter<Todo>();

  update(){
    this.changesInTodo.emit(this.todo);
    
  }

  

}




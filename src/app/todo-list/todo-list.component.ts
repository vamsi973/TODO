import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  seletedForEdit: Todo = new Todo();
  ngOnInit(){
    console.log(this.seletedForEdit,999);
  }
  todoList: Todo[] = [
    // {id:1, title: 'Learn Angular', completed: true,description:'Learn Angular'},
    // {id:2, title: 'Learn TypeScript', completed: false,description:'Learn TypeScript'},
    // {id:3, title: 'Learn JavaScript', completed: false,description:'Learn JavaScript'},
    // {id:4, title: 'Learn HTML', completed: false,description:'Learn HTML'},
  ];
  createNewTodo(){
    // this.todoList.push({
    //   id: this.todoList.length+1,
    //   title: 'New Task'+this.todoList.length+1,
    //   completed: false,
    //   description: 'New Task'+this.todoList.length+1
    // })
  }
  deleteLastOne(){
    // this.todoList.pop();
  }
  showEditDetailes(todoItem: Todo){
    console.log(todoItem,299);
    this.seletedForEdit = todoItem;
  }
  update(event:Todo){
    console.log(event,999);
    const index = this.todoList.findIndex(todo => todo.id === event.id);
    console.log(index,888);
    if(index !== -1){
      this.todoList[index] = event;
    }else{
        this.todoList.push(event);
    }
    alert('Updated Successfully')
  }
}

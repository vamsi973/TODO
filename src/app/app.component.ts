import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
  //databinding
  //interpolation

  namePrint(){
    return "Hello " + this.title;
  }
  value = 0;
  increment(){
    this.value++;

  }
  decrement(){
    this.value--;
  }

  update(event:Todo){
    console.log(event,991219);
  }
}

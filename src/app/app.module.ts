import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailedComponent } from './todo-detailed/todo-detailed.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // pipe, directive, component
    AppComponent,
    TodoListComponent,
    TodoDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


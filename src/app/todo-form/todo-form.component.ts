import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TodoService } from '../todo.service';
import { stringify } from 'querystring';
import { Init } from 'v8';
import { clear } from 'console';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
    standalone: true,     
  templateUrl: './todo-form.component.html',
   styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent  {
 constructor(private ts:TodoService) {} 
  
 newTask='';
    AddItem(){
      console.log('button was clocked ');
       console.log(this.newTask)  
        this.ts.AddTask(this.newTask);
      this.newTask = '';
    }
    ResetItem(){
     this.newTask = '';
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todolist=[
    {
      id:1,
      'task':"Task1"
    }
     
  ]
  constructor() { }  

  AddTask(taskitem:string){
    this.todolist.push({
     id:this.todolist.length+1,
     task:taskitem
    });
  }
  RemoveTask(id:number){
      console.log('Remove was clicked '+id )
     this.todolist.splice(id,1);
      console.log(this.todolist)

  }
}

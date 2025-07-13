import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tod-list',
  imports: [NgFor],
  templateUrl: './tod-list.component.html',
  styleUrl: './tod-list.component.css'
})
export class TodListComponent implements OnInit {
  constructor(private ts:TodoService){}
  todos:any;
  ngOnInit(): void {
    this.todos=this.ts.todolist;
  }
   
  remove(id :number){
    this.ts.RemoveTask(id);
  }
}

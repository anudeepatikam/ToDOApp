import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodListComponent } from './tod-list/tod-list.component';

@Component({
  selector: 'app-root',
  imports: [TodoFormComponent,TodListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDOApp';
}

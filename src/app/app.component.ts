import { Component } from '@angular/core';
import { TaskFormComponent } from "./task-form/task-form.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskFilterComponent } from "./task-filter/task-filter.component";

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskListComponent, TaskFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Salazar_APPDEV_MG_MIDLAB3';
}

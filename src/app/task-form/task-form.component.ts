import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  description = '';
  
  constructor(private taskService: ServiceService) {}
   addTask() {
    if (this.description.trim()) {
      this.taskService.addTask(this.description);
      this.description = '';
    }
  }
}

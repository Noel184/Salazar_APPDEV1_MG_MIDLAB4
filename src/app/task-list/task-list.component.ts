import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Model } from '../service/model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(private taskService: ServiceService) {}
  editingTaskId: number | null = null; 
  editedTitle: string = '';
  editedDescription: string = '';

  get tasks(): Model[] {
    return this.taskService.getFilteredTasks();
  }

  toggleCompleted(id: number) {
    this.taskService.toggleCompleted(id);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
  startEditing(task: Model) {
    this.editingTaskId = task.id;
    this.editedDescription = task.description;
  }

  saveDescription(taskId: number) {
    if (this.editedDescription.trim() !== '') {
      this.taskService.editTask(taskId, this.editedDescription.trim());
    }
    this.editingTaskId = null;
  }
  
}


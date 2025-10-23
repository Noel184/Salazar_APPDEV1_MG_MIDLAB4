import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  constructor(private taskService: ServiceService) {}

  get currentFilter(): string {
    return this.taskService.getCurrentFilter(); 
  }

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.taskService.setFilter(filter);
  }
}

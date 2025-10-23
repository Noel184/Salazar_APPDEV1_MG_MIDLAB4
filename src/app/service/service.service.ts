import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private tasks: Model[] = [];
  private currentFilter: 'all' | 'active' | 'completed' = 'all';

  addTask(description: string): void {
    this.tasks.push({
      id: Date.now(),
      description,
      isCompleted: false,
      createdAt: new Date()
    });
  }

  editTask(id: number, newDescription: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.description = newDescription;
  }

  toggleCompleted(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.isCompleted = !task.isCompleted;
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.currentFilter = filter;
  }

  getCurrentFilter(): 'all' | 'active' | 'completed' {
    return this.currentFilter;
  }

  getFilteredTasks(): Model[] {
    if (this.currentFilter === 'active') {
      return this.tasks.filter(t => !t.isCompleted);
    }
    if (this.currentFilter === 'completed') {
      return this.tasks.filter(t => t.isCompleted);
    }
    return this.tasks;
  }

  getCompletedTasks(): number {
    return this.tasks.filter(t => t.isCompleted).length;
  }

  getRemainingTasks(): number {
    return this.tasks.filter(t => !t.isCompleted).length;
  }
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

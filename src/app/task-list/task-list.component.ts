import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces';

@Component({
  selector: 'app-task-list',
  template: `
    <div class="row">
      <div class="col s12">
        <p *ngIf="tasks.length === 0">No tasks</p>
        <div
          class="task"
          *ngFor="let task of tasks"
          [ngClass]="{ completed: task.completed }"
        >
          <label>
            <input
              type="checkbox"
              class="filled-in"
              [checked]="task.completed"
              (change)="taskChange($event, task.id)"
            />
            <span>{{ task.label }}</span>
          </label>
          <i class="material-icons remove" (click)="remove(task.id)">remove</i>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .task {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
      }
      .task.completed {
        position: relative;
        opacity: 0.7;
      }
      .task.completed:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        background: #000;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 2;
        opacity: 0.5;
      }
      .remove {
        color: red;
        cursor: pointer;
      }
    `,
  ],
})
export class TaskListComponent implements OnInit {
  constructor() {}

  tasks: Task[] = [];

  ngOnInit(): void {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  taskChange(event, id: string): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index].completed = event.target.checked;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  remove(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

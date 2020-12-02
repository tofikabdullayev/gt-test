import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../interfaces';

@Component({
  selector: 'app-create-task',
  template: `
    <div class="row">
      <form class="col s12" #form="ngForm" (ngSubmit)="onSubmit(form)">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="task"
              type="text"
              name="label"
              class="validate"
              [(ngModel)]="label"
              placeholder="Task Label"
              required
            />
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .ng-invalid.ng-dirty {
        border-color: red !important;
      }
    `,
  ],
})
export class CreateTaskComponent implements OnInit {
  constructor() {}

  label = '';
  tasks: Task[] = [];

  ngOnInit(): void {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.createTask(form.value.label);
    }
  }

  private createTask(label: string): void {
    this.tasks.push({
      id: new Date().toISOString(),
      label,
      completed: false,
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

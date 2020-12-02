import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task-list',
  template: `
    <div class="row">
      <div class="col s12">
        <p *ngIf="dataService.tasks.length === 0">No tasks</p>
        <div
          class="task"
          *ngFor="let task of dataService.tasks"
          [ngClass]="{ completed: task.completed }"
        >
          <label>
            <input
              type="checkbox"
              class="filled-in"
              [checked]="task.completed"
              (change)="
                dataService.taskChange(
                  $event.target.checked,
                  task.id,
                  'completed'
                )
              "
            />
            <span>{{ task.label }}</span>
          </label>
          <i
            class="material-icons remove"
            (click)="dataService.removeTask(task.id)"
            >remove</i
          >
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-top: 15px;
      }
      .task {
        display: flex;
        justify-content: space-between;
        padding: 15px;
      }
      .task:hover {
        background: #eee;
      }
      .task.completed {
        opacity: 0.7;
      }
      .remove {
        color: red;
        cursor: pointer;
      }
    `,
  ],
})
export class TaskListComponent {
  constructor(public dataService: DataService) {}
}

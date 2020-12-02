import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

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
      <app-loader *ngIf="dataService.loading"></app-loader>
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
export class CreateTaskComponent {
  constructor(public dataService: DataService) {}
  label = '';

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.dataService.createTask(form.value.label);
    }
  }
}

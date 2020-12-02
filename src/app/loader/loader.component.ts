import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="preloader-wrapper active">
      <div class="spinner-layer spinner-red-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
        justify-content: center;
      }
    `,
  ],
})
export class LoaderComponent {}

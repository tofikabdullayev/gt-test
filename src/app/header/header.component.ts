import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">TODO List</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li routerLinkActive="active">
            <a routerLink="create">Create task</a>
          </li>
          <li routerLinkActive="active"><a routerLink="list">Task list</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
    `
      nav {
        padding: 0 10px;
      }
    `,
  ],
})
export class HeaderComponent {}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { Task } from './interfaces';
import { reverseAlphabet } from './utils';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _tasks: Task[] = [];
  get tasks(): Task[] {
    return this._tasks.sort((a, b) => reverseAlphabet(a, b));
  }

  private _loading = false;
  get loading(): boolean {
    return this._loading;
  }
  set loading(value: boolean) {
    this._loading = value;
  }

  private pendingTasks = new Subject<Task>();

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this._tasks = JSON.parse(tasks);
    }
    const timeout = Math.floor(Math.random() * 9) + 5;
    this.pendingTasks
      .pipe(
        filter((v) => !!v),
        delay(timeout * 1000)
      )
      .subscribe((task: Task) => {
        this.saveTask(task);
      });
  }

  public createTask(label: string): void {
    this.loading = true;
    this.pendingTasks.next({
      id: new Date().toISOString(),
      label,
      completed: false,
    });
  }

  public removeTask(id: string): void {
    this._tasks = this._tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }

  public taskChange(value: boolean | string, id: string, key: string): void {
    const index = this._tasks.findIndex((task) => task.id === id);
    this._tasks[index][key] = value;
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }

  private saveTask(task: Task): void {
    this._tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
    this.loading = false;
  }
}

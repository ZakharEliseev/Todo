import { Task } from './task'
export class TaskManager {
  private input: HTMLInputElement;
  private list: Array<Task>;

  constructor() {
    this.input = document.querySelector('#input') as HTMLInputElement;
    this.list = [];
  }

  createTask() {
    const task: Task = new Task(this.input.value);
    this.list.push(task);
    this.input.value = '';
  }

  getTasks() {
    return this.list;
  }
}

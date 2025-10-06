import { Task } from './task';

export class TaskManager {
  private inputElement: HTMLInputElement;
  private list: Array<Task>;

  constructor() {
    this.inputElement = document.querySelector('.todo-form__input') as HTMLInputElement;
    this.list = [];
  }

  createTask(): void {
    const task: Task = new Task(this.inputElement.value);
    this.list.push(task);
    this.inputElement.value = '';
  }

  getTasks(): Array<Task> {
    return this.list;
  }

}

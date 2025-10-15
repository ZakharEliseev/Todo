import { Task } from './task';

export class TaskManager {
  private inputElement: HTMLInputElement;
  private list: Array<Task>;
  private savedTasks: Array<Task>;
  private storageKey: string = 'tasks';

  constructor() {
    this.inputElement = document.querySelector('.todo-form__input') as HTMLInputElement;
    this.list = [];
    this.savedTasks = JSON.parse(localStorage.getItem('tasks')!) || [];
    this.loadTask(this.savedTasks);
  }

  private saveInStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.list));
  }

  createTask(): void {
    const task: Task = new Task(this.inputElement.value);
    this.list.push(task);
    this.saveInStorage();
    this.inputElement.value = '';
  }

  loadTask(list: Array<Task>) {
    this.list = list;
  }

  getTasks(): Array<Task> {
    return [...this.list];
  }

  toggleComplete = (taskId: number): void => {
    const task = this.list.find((t) => t.id === taskId);
    if (task) {
      task.isCompleted = !task.isCompleted;
      this.saveInStorage();
    }
  };

  deleteTask = (taskId: number): void => {
    this.list = this.list.filter((t) => t.id !== taskId);
    this.saveInStorage();
  };
}

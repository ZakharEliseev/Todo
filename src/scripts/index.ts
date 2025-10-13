import { Task } from './task';
import { TaskManager } from './taskManager';
import { UiManager } from './uiManager';

export class App {
  private form: HTMLFormElement;
  private taskManager = new TaskManager();
  private uiManager = new UiManager();

  constructor() {
    this.form = document.querySelector('.todo-form') as HTMLFormElement;
  }

  onDelete = (taskId: number): void => {
    this.taskManager.deleteTask(taskId);
    this.updateUi()
  }

  onToggleStatusTask = (taskId: number): void => {
    this.taskManager.toggleComplete(taskId);
    this.updateUi()
  }

  init(): void {
    this.form.addEventListener('submit', (e): void => {
      e.preventDefault();
      this.taskManager.createTask();
      this.updateUi();
    });
  }

  updateUi() {
    const tasks: Array<Task> = this.taskManager.getTasks();
    this.uiManager.render(tasks, this.onDelete, this.onToggleStatusTask);
  }
}

const app = new App();
app.init();
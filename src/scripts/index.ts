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

  init(): void {
    this.form.addEventListener('submit', (e): void => {
      e.preventDefault();
      this.taskManager.createTask();
      this.updateUi();
    });
  }

  onDleteTask = (taskId: number) => {
    this.taskManager.deleteTask(taskId);
    this.updateUi();
  };

  onToggleTaskStatus = (taskId: number) => {
    this.taskManager.toggleComplete(taskId);
    this.updateUi();
  };

  updateUi() {
    const tasks: Array<Task> = this.taskManager.getTasks();
    this.uiManager.render(tasks, this.onDleteTask, this.onToggleTaskStatus);
  }
}

const app = new App();
app.init();
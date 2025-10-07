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
      const tasks: Array<Task> = this.taskManager.getTasks();
      this.uiManager.render(
        tasks, this.taskManager.deleteTask, this.taskManager.toggleComplete);
      this.updateUi();
    });
  }

  updateUi() {
    console.log(this.taskManager.getTasks());
    console.log('Ui is updated.');
  }
}

const app = new App();
app.init();

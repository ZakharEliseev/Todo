import { Task } from './task';
import { TaskManager } from './taskManager';
import { UiManager } from './uiManager';

class App {
  private form: HTMLFormElement;
  private taskManager = new TaskManager();
  private uiManager = new UiManager();

  constructor() {
    this.form = document.querySelector('.todo-form') as HTMLFormElement;
  }

  init(): void {
    this.form.addEventListener('submit', (e): void => {
      e.preventDefault();
      const tasks: Array<Task> = this.taskManager.getTasks();
      this.taskManager.createTask();
      this.uiManager.render(tasks);
      this.updateUi();
    });
  }

  updateUi() {
    console.log('Ui is updated.');
  }
}

const app = new App();
app.init();

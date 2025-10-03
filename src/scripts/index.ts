import { UiManager } from './renderManager';
import { TaskManager } from './taskManager';

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
      this.taskManager.createTask();
      this.uiManager.renderTask(this.taskManager.getTasks());
      this.updateUi();
    });
  }

  updateUi() {
    console.log('Ui is updated.');
    console.log(this.taskManager.getTasks());
  }
}

const app = new App();
app.init();

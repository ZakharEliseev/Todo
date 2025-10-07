import { Task } from './task';
import { TaskManager } from './taskManager';
import { UiManager } from './uiManager';

class App {
  private form: HTMLFormElement;
  private taskManager = new TaskManager();
  private uiManager: UiManager;

  constructor() {
    this.form = document.querySelector('.todo-form') as HTMLFormElement;
    this.uiManager = new UiManager(this.taskManager);
  }

  init(): void {
    this.uiManager.eventDelete();
    this.uiManager.eventComplete();
    this.form.addEventListener('submit', (e): void => {
      e.preventDefault();
      this.taskManager.createTask();
      const tasks: Array<Task> = this.taskManager.getTasks();
      this.uiManager.render(tasks);
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

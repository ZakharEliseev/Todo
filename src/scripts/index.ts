import { FilterManager, FilterType } from './filterManager';
import { Task } from './task';
import { TaskManager } from './taskManager';
import { UiManager } from './uiManager';

export class App {
  private form: HTMLFormElement;
  private allBtn: HTMLButtonElement;
  private activeBtn: HTMLButtonElement;
  private completeBtn: HTMLButtonElement;
  private taskManager = new TaskManager();
  private uiManager = new UiManager();
  private filterManager = new FilterManager();

  constructor() {
    this.form = document.querySelector('.todo-form') as HTMLFormElement;
    this.allBtn = document.getElementById(FilterType.ALL) as HTMLButtonElement;
    this.activeBtn = document.getElementById(FilterType.ACTIVE) as HTMLButtonElement;
    this.completeBtn = document.getElementById(FilterType.COMPLETED) as HTMLButtonElement;
  }

  onDelete = (taskId: number): void => {
    this.taskManager.deleteTask(taskId);
    this.updateUi();
  };

  onToggleStatusTask = (taskId: number): void => {
    this.taskManager.toggleComplete(taskId);
    this.updateUi();
  };

  init(): void {
    this.form.addEventListener('submit', (e): void => {
      e.preventDefault();
      this.taskManager.createTask();
      this.updateUi();
    });
    this.allBtn.addEventListener('click', () => {
      this.filterManager.setFilter(FilterType.ALL);
      this.updateUi();
    });
    this.activeBtn.addEventListener('click', () => {
      this.filterManager.setFilter(FilterType.ACTIVE);
      this.updateUi();
    });
    this.completeBtn.addEventListener('click', () => {
      this.filterManager.setFilter(FilterType.COMPLETED);
      this.updateUi();
    });
  }

  updateUi() {
    const tasks: Array<Task> = this.taskManager.getTasks();
    const filteredTask = this.filterManager.getFilteredTasks(tasks);
    this.uiManager.render(filteredTask, this.onDelete, this.onToggleStatusTask);
  }
}

const app = new App();
app.init();
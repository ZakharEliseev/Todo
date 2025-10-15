import { FilterManager, FilterType } from './filterManager';
import { PaginationManager } from './paginationManager';
import { Task } from './task';
import { TaskManager } from './taskManager';
import { UiManager } from './uiManager';

export class App {
  private form: HTMLFormElement;
  private taskManager = new TaskManager();
  private uiManager = new UiManager();
  private filterManager = new FilterManager();
  private paginationManager = new PaginationManager();
  constructor() {
    this.form = document.querySelector('.todo-form') as HTMLFormElement;
  }

  onDelete = (taskId: number): void => {
    this.taskManager.deleteTask(taskId);
    this.updateUi();
  };

  onToggleStatusTask = (taskId: number): void => {
    this.taskManager.toggleComplete(taskId);
    this.updateUi();
  };

  onSetCurrentPage = (pageNumber: number) => {
    this.paginationManager.setCurrentPage(pageNumber);
    this.updateUi();
  };

  init(): void {
    this.form.addEventListener('submit', (e): void => {
      e.preventDefault();
      this.taskManager.createTask();
      this.updateUi();
    });

    document.querySelectorAll('.filter-button').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const type = (e.currentTarget as HTMLElement).dataset.type as FilterType;
        this.filterManager.setFilter(type);
        this.paginationManager.setCurrentPage(this.paginationManager.getFirstPage());
        this.updateUi();
      });
    });
  }

  updateUi() {
    const tasks: Array<Task> = this.taskManager.getTasks();
    const filteredTasks = this.filterManager.getFilteredTasks(tasks);
    const paginatedTasks = this.paginationManager.getPaginatedTasks(filteredTasks);
    this.uiManager.render(paginatedTasks, this.onDelete, this.onToggleStatusTask);
    this.uiManager.renderPagination(
      filteredTasks,
      this.onSetCurrentPage,
      this.paginationManager.getCurrentPage()
    );
    this.uiManager.toggleActiveFilter(this.filterManager.getCurrentFilter());
    console.log(this.taskManager.getTasks())
  }
}

const app = new App();
app.init();

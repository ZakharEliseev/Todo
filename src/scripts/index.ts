import { FilterManager, FilterType } from './filterManager';
import { PaginationManager } from './paginationManager';
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
  private paginationManager = new PaginationManager();
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

    const filterBtns = document.querySelectorAll('.filter-button');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const filterButton = e.currentTarget as HTMLButtonElement;
        const filterType = filterButton.id as FilterType;

        if (Object.values(FilterType).includes(filterType)) {
          this.filterManager.setFilter(filterType);
          this.uiManager.toggleActiveBtn(filterBtns, btn);
          this.updateUi();
        }
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
      this.paginationManager.getCurrentPage(),
    );
  }
}

const app = new App();
app.init();

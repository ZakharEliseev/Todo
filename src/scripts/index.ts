import {TaskManager} from './taskManager'
class App {
  private addBtn: HTMLButtonElement;
  private allBtn: HTMLButtonElement;
  private activeBtn: HTMLButtonElement;
  private completeBtn: HTMLButtonElement;
  private filterBtns: Array<Element>;
  private taskManager: TaskManager;

  constructor() {
    this.addBtn = document.querySelector('#add')!;
    this.allBtn = document.querySelector('#all')!;
    this.activeBtn = document.querySelector('#active')!;
    this.completeBtn = document.querySelector('#complete')!;
    this.filterBtns = Array.from(document.querySelector('#filter')!.children);
    this.taskManager = new TaskManager();

  }
  init(): void {
    this.addBtn.addEventListener('click', (): void => {
      this.taskManager.createTask();
      this.taskManager.getTasks();
      this.updateUi();
    });
  }

  updateUi() {
    console.log('Ui is updated.');
  }
}

const app = new App();
app.init();

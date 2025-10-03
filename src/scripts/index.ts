import {TaskManager, UiManager} from './managers'

class App {
  private addBtn: HTMLButtonElement;
  private allBtn: HTMLButtonElement;
  private activeBtn: HTMLButtonElement;
  private completeBtn: HTMLButtonElement;
  private filterBtns: Array<Element>;
  private taskManager = new TaskManager;
  private uiManager = new UiManager;

  constructor() {
    this.addBtn = document.querySelector('#add')!;
    this.allBtn = document.querySelector('#all')!;
    this.activeBtn = document.querySelector('#active')!;
    this.completeBtn = document.querySelector('#complete')!;
    this.filterBtns = Array.from(document.querySelector('#filter')!.children);

  }
  init(): void {
    this.addBtn.addEventListener('click', (): void => {
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

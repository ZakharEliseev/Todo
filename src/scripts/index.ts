class App {
  private input: HTMLInputElement;
  private addBtn: HTMLButtonElement;
  private blockList: HTMLUListElement
  private allBtn: HTMLButtonElement;
  private activeBtn: HTMLButtonElement;
  private completeBtn: HTMLButtonElement;
  private filterBtns: Array<Element>;
  private tasks: string[];

  constructor() {
    this.input = document.querySelector('#input-line') as HTMLInputElement;
    this.addBtn = document.querySelector('#add')!;
    this.blockList = document.querySelector('#list')!;
    this.allBtn = document.querySelector('#all')!;
    this.activeBtn = document.querySelector('#active')!;
    this.completeBtn = document.querySelector('#complete')!;
    this.filterBtns = Array.from(document.querySelector('#filter')!.children);
    this.tasks = [];
  }
  init(): void {
    this.addBtn.addEventListener('click', (): void => {
      this.tasks.push(this.input.value);
      this.input.value = '';
      this.updateUi();

    });
  }
  updateUi(){
    console.log('Ui is updated.')
  }
}
const app = new App();
app.init();
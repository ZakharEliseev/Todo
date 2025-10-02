export class TaskManager {
  private tasks: string[];
  private input: HTMLInputElement;
  private blockList: HTMLUListElement;

  constructor() {
    this.tasks = [];
    this.input = document.querySelector('#input-line') as HTMLInputElement;
    this.blockList = document.querySelector('#list')!;
  }

  createTask() {
    const descr = document.createElement('p');

    descr.textContent = this.input.value;
    this.tasks.push(descr.textContent);
    this.input.value = '';
  }

  getTasks() {
    console.log(this.tasks);
  }
}

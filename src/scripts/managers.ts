import { Task } from './task';


const blockList: HTMLUListElement = document.querySelector('.block-list') as HTMLUListElement;

export class TaskManager {
  public inputElement: HTMLInputElement;
  private list: Array<Task>;

  constructor() {
    this.inputElement = document.querySelector('#input') as HTMLInputElement;
    this.list = [];
  }

  createTask(): void {
    const task: Task = new Task(this.inputElement.value);
    this.list.push(task);
  }

  getTasks(): Array<Task> {
    return this.list;
  }
}

export class UiManager {
  taskManager = new TaskManager();
  renderTask(taskData: Array<Task>): void {
    const li: HTMLLIElement = document.createElement('li');

    const descr: HTMLParagraphElement = document.createElement('p');
    descr.textContent = taskData[taskData.length - 1].value;
    descr.classList.add('descr-task');

    const completeBtn: HTMLButtonElement = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('block-list-complete-btn');

    const deleteBtn: HTMLButtonElement = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('block-list-delete-btn');

    blockList.append(li);
    li.append(completeBtn, descr, deleteBtn);
    this.taskManager.inputElement.value = '';
  }
}
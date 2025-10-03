import { Task } from './task';
import { TaskManager } from './taskManager';

export class UiManager {
  taskManager = new TaskManager();
  blockList: HTMLUListElement;

  constructor() {
    this.blockList = document.querySelector('.block-list') as HTMLUListElement;
  }
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

    this.blockList.append(li);
    li.append(completeBtn, descr, deleteBtn);
    this.taskManager.getInputData().value = '';
  }
}

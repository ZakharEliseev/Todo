import { Task } from './task';

export class UiManager {
  todoList: HTMLUListElement;

  constructor() {
    this.todoList = document.querySelector('.todo-list') as HTMLUListElement;
  }

  renderTask(list: Array<Task>): void {

    for (let i = 0; i < list.length; i++){
      const li: HTMLLIElement = document.createElement('li');
      const descr: HTMLParagraphElement = document.createElement('p');
      descr.textContent = list[i].value;
      const completeBtn: HTMLButtonElement = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.classList.add('todo-list__complete-btn');

      const deleteBtn: HTMLButtonElement = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('todo-list__delete-btn');

      this.todoList.append(li);
      li.append(completeBtn, descr, deleteBtn);
    }
  }
}

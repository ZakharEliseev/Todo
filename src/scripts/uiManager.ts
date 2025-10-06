import { Task } from './task';

export class UiManager {
  todoList: HTMLUListElement;

  constructor() {
    this.todoList = document.querySelector('.todo-list') as HTMLUListElement;
  }

  getTodoList(): HTMLUListElement {
    return this.todoList;
  }

  renderTaskText(list: Array<Task>): void {
    this.todoList.replaceChildren();
    let fragment: DocumentFragment = new DocumentFragment();
    list.forEach((t) => {
      const li: HTMLLIElement = document.createElement('li');
      const descr: HTMLParagraphElement = document.createElement('p');
      descr.textContent = t.value;
      li.append(descr);
      fragment.append(li);
    });
    this.todoList.append(fragment);
  }

  renderTaskBtns(list: HTMLUListElement): void {
    Array.from(list.children).forEach((li) => {
      const completeBtn: HTMLButtonElement = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.classList.add('todo-list__complete-btn');

      const deleteBtn: HTMLButtonElement = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('todo-list__delete-btn');
      li.append(completeBtn, deleteBtn);
    });
  }
}

import { Task } from './task';

export class UiManager {
  todoList: HTMLUListElement;

  constructor() {
    this.todoList = document.querySelector('.todo-list') as HTMLUListElement;
  }

  getButton(title: string, callback: () => void): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button');
    button.textContent = title;
    button.classList.add(`todo-list__${title}Btn`);
    button.addEventListener('click', () => callback);
    return button;
  }

  render(
    list: Array<Task>, del: (taskId: number) => void, complete: (taskId: number) => void): void {
    const fragment: DocumentFragment = new DocumentFragment();
    list.forEach((t) => {
      const li: HTMLLIElement = document.createElement('li');
      li.dataset.taskId = `${t.id}`;

      const text: HTMLParagraphElement = document.createElement('p');
      text.textContent = t.value;
      if (t.isCompleted === true) text.classList.add('todo-list__complete-task');

      const deleteBtn = this.getButton('Delete', () => del(t.id));
      const completeBtn = this.getButton('Complete', () => complete(t.id));

      li.append(deleteBtn, text, completeBtn);
      fragment.append(li);
    });
    this.todoList.replaceChildren();
    this.todoList.append(fragment);
  }
}
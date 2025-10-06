import { Task } from './task';

export class UiManager {
  todoList: HTMLUListElement;

  constructor() {
    this.todoList = document.querySelector('.todo-list') as HTMLUListElement;
  }

  getButton(title: string): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button');
    button.textContent = title;
    return button;
  }

  render(list: Array<Task>): void {
    this.todoList.replaceChildren();
    const fragment: DocumentFragment = new DocumentFragment();
    list.forEach((t) => {
      const li: HTMLLIElement = document.createElement('li');
      const value: HTMLParagraphElement = document.createElement('p');
      value.textContent = t.value;
      li.append(this.getButton('Complete'), value, this.getButton('Delete'));
      fragment.append(li);
    });
    this.todoList.append(fragment);
  }
}

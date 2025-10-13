import { Task } from './task';

export class UiManager {
  todoList: HTMLUListElement;
  pagingBlock: HTMLDivElement;

  constructor() {
    this.todoList = document.querySelector('.todo-list') as HTMLUListElement;
    this.pagingBlock = document.querySelector('.todo-paging') as HTMLDivElement;
  }

  getButton(title: string, callback: () => void): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button');
    button.textContent = title;
    button.classList.add(`todo-list__${title}Btn`);
    button.addEventListener('click', callback);
    return button;
  }

  render(
    list: Array<Task>,
    remove: (taskId: number) => void,
    complete: (taskId: number) => void,
  ): void {
    const fragment: DocumentFragment = new DocumentFragment();
    list.forEach((t) => {
      const li: HTMLLIElement = document.createElement('li');

      const text: HTMLParagraphElement = document.createElement('p');
      text.textContent = t.value;
      if (t.isCompleted) {
        text.classList.add('todo-list__complete-task');
      }

      const deleteBtn = this.getButton('Delete', () => remove(t.id));
      const completeBtn = this.getButton('Complete', () => complete(t.id));

      li.append(deleteBtn, text, completeBtn);
      fragment.append(li);
    });

    this.todoList.replaceChildren();
    this.todoList.append(fragment);
  }

  renderPagination(list: Task[], setCurrentPage: (page: number) => void) {
    const totalPages = Math.ceil(list.length / 5);
    const fragment = new DocumentFragment();
    for (let i = 0; i < totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.textContent = (i + 1).toString();
      pageBtn.addEventListener('click', () => {
        setCurrentPage(Number(pageBtn.textContent) - 1);
      })
      fragment.append(pageBtn);
    }
    this.pagingBlock.replaceChildren();
    this.pagingBlock.append(fragment);
  }
}

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

  toggleActiveBtn(btns: Array<HTMLButtonElement>, currentBtn: HTMLButtonElement) {
    Array.from(btns).forEach((b) => (b.className = ''));
    currentBtn.classList.add('active-button');
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

  renderPagination(list: Task[], setCurrentPage: (page: number) => void, currentPage: number) {
    const totalPages = Math.ceil(list.length / 5);
    const pageButtons: HTMLButtonElement[] = [];
    for (let i = 0; i < totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.textContent = (i + 1).toString();
      pageBtn.addEventListener('click', () => {
        setCurrentPage(i);
      });
      pageButtons.push(pageBtn);
    }
    if (pageButtons[currentPage]) {
      this.toggleActiveBtn(pageButtons, pageButtons[currentPage]);
    }
    this.pagingBlock.replaceChildren();
    this.pagingBlock.append(...pageButtons);
  }
}

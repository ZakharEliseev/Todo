
import { Task } from './task';
import { TaskManager } from './taskManager';

export class UiManager {
  todoList: HTMLUListElement;
  private taskManager: TaskManager;

  constructor(taskManager: TaskManager) {
    this.todoList = document.querySelector('.todo-list') as HTMLUListElement;
    this.taskManager = taskManager;
  }

  getButton(title: string): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button');
    button.textContent = title;
    return button;
  }

  render(list: Array<Task>): void {
    const fragment: DocumentFragment = new DocumentFragment();
    list.forEach((t) => {
      const li: HTMLLIElement = document.createElement('li');
      li.dataset.taskId = `${t.id}`;

      const text: HTMLParagraphElement = document.createElement('p');
      text.textContent = t.value;
      if (t.isCompleted === true) text.classList.add('todo-list__complete-task');

      const deleteBtn = this.getButton('Delete');
      deleteBtn.classList.add('todo-list__deleteBtn');

      const completeBtn = this.getButton('Complete');
      completeBtn.classList.add('todo-list__completeBtn');

      li.append(deleteBtn, text, completeBtn);
      fragment.append(li);
    });
    this.todoList.replaceChildren();
    this.todoList.append(fragment);
  }

  eventDelete() {
    this.todoList.addEventListener('click', (e) => {
      if ((e.target as Element).closest('.todo-list__deleteBtn')) {
        const currentLi = (e.target as Element).closest('li') as HTMLLIElement;
        const taskId = Number(currentLi.dataset.taskId);
        
        this.taskManager.deleteTask(taskId)
        this.render(this.taskManager.getTasks());
      }
    });
  }

  eventComplete() {
    this.todoList.addEventListener('click', (e) => {
      if ((e.target as Element).closest('.todo-list__completeBtn')) {
        const currentLi = (e.target as Element).closest('li') as HTMLLIElement;
        const taskId = Number(currentLi.dataset.taskId);
        
        this.taskManager.toggleComplete(taskId);
        this.render(this.taskManager.getTasks());
      }
    });
  }
}

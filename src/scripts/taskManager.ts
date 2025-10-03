class Task {
  constructor(
    public value: string,
    public id: number = Date.now(),
    public isCompleted: boolean = false,
  ) {}
}

export class TaskManager {
  private input: HTMLInputElement;
  private taskList: Array<Task>;

  constructor() {
    this.input = document.querySelector('#input') as HTMLInputElement;
    this.taskList = [];
  }

  createTask() {
    const task: Task = new Task(this.input.value);
    this.taskList.push(task);
    this.input.value = '';
  }

  getTasks() {
    return this.taskList;
  }
}

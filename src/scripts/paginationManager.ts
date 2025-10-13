import { Task } from "./task";

export class PaginationManager {
  private currentPage: number;

  constructor() {
    this.currentPage = 0;
  }

  setCurrentPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getPaginatedTasks(list: Task[]): Task[] {
    const start = this.currentPage * 5;
    const end = start + 5;
    const page = list.slice(start, end);
    return page;
  }
}
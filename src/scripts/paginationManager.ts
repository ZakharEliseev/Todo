import { Task } from "./task";

export class PaginationManager {
  private currentPage: number;

  constructor() {
    this.currentPage = 1;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }
  
  setCurrentPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  getPaginatedTasks(list: Task[]): Task[] {
    const start = this.currentPage * 5;
    const end = start + 5;
    const page = list.slice(start, end);
    return page;
  }
}
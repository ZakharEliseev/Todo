import { Task } from "./task";

export class PaginationManager {
  private currentPage: number;
  private FIRST_PAGE = 0;

  constructor() {
    this.currentPage = 0;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }
  
  setCurrentPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  getFirstPage() {
    return this.FIRST_PAGE
  }

  getPaginatedTasks(list: Task[]): Task[] {
    const start = this.currentPage * 5;
    const end = start + 5;
    const page = list.slice(start, end);
    return page;
  }
}
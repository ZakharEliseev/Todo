import { Task } from "./task";

export const FIRST_PAGE = 0;

export class PaginationManager {
  private currentPage: number;
  private storageKey: string = 'page';
  private saveInStorage(): void {
    localStorage.setItem(this.storageKey, this.currentPage.toString())
  }

  constructor() {
    this.currentPage = 0;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }
  
  setCurrentPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.saveInStorage();
  }


  getPaginatedTasks(list: Task[]): Task[] {
    const start = this.currentPage * 5;
    const end = start + 5;
    const page = list.slice(start, end);
    return page;
  }
}
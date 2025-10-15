import { Task } from './task';

export enum FilterType {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export class FilterManager {
  private currentFilter: FilterType;
  private storageKey: string = 'activeFilter';

  constructor() {
    this.currentFilter = localStorage.getItem('activeFilter') as FilterType || FilterType.ALL;
    this.setFilter(this.currentFilter);
  }

  private saveInStorage(): void {
    localStorage.setItem(this.storageKey, this.currentFilter);
  }

  getCurrentFilter() {
    return this.currentFilter;
  }

  setFilter(filterStatus: FilterType) {
    this.currentFilter = filterStatus;
    this.saveInStorage();
  }

  getFilteredTasks(list: Task[]): Task[] {
    switch (this.currentFilter) {
      case FilterType.ACTIVE:
        return list.filter((t) => !t.isCompleted);
      case FilterType.COMPLETED:
        return list.filter((t) => t.isCompleted);
      default:
        return list;
    }
  }
}

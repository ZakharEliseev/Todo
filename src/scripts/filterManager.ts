import { Task } from './task';

export enum FilterType {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
};

export class FilterManager {
  private currentFilter: FilterType;

  constructor() {
    this.currentFilter = FilterType.ALL;
  }

  setFilter(filterStatus: FilterType) {
    this.currentFilter = filterStatus;
  }

  getFilteredTasks(list: Task[]): Task[] {
    switch (this.currentFilter) {
      case 'active':
        return list.filter((t) => !t.isCompleted);
      case 'completed':
        return list.filter((t) => t.isCompleted);
      default: 
        return list;
    }
  }
}

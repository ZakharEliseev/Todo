type FilterType = 'all' | 'active' | 'completed';
import { Task } from './task';

export class FilterManager {
  private currentFilter: string;

  constructor() {
    this.currentFilter = 'all';
  }

  changeFilterStatus(filterStatus: FilterType) {
    this.currentFilter = filterStatus;
  }

  getFilteredTasks(list: Task[]): Task[] {
    switch (this.currentFilter) {
      case 'active':
        return list.filter((t) => t.isCompleted === false);
      case 'completed':
        return list.filter((t) => t.isCompleted === true);
      default: 
        return list;
    }
  }
}

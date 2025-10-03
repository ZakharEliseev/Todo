export class Task {
  constructor(
    public value: string,
    public id: number = Date.now(),
    public isCompleted: boolean = false,
  ) {}
}

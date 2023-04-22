import {Student} from "./Student";

export class Group {
  constructor(private id?: number, private name?: number, private students?: Student[]) {
  }

  get getId(): number {
    return this.id!;
  }

  set setId(value: number) {
    this.id = value;
  }

  get getName(): number {
    return this.name!;
  }

  set setName(value: number) {
    this.name = value;
  }

  get getStudents(): Student[] {
    return this.students!;
  }

  set setStudents(value: Student[]) {
    this.students = value;
  }

}

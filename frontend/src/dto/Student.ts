import {Group} from "./Group";

export class Student {
  constructor(private id?: number, private name?: string, private birthdate?: Date, private number?: number,
              private groupId?: number) {
  }

  get getName(): string {
    return this.name!;
  }

  set setName(value: string) {
    this.name = value;
  }

  get getBirthdate(): Date {
    return this.birthdate!;
  }

  set setBirthdate(value: Date) {
    this.birthdate = value;
  }

  get getNumber(): number {
    return this.number!;
  }

  set setNumber(value: number) {
    this.number = value;
  }

  get getId(): number {
    return this.id!;
  }

  set setId(value: number) {
    this.id = value;
  }

  set setGroupId(value: number) {
    this.groupId = value
  }

  get getGroupId() {
    return this.groupId
  }
}

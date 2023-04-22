import {Component, Inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {StudentService} from "../service/StudentService";
import {Group} from "../../dto/Group";
import {Student} from "../../dto/Student";
import {D} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-dialog-student-add',
  templateUrl: './dialog-student-add.component.html',
  styleUrls: ['./dialog-student-add.component.css']
})
export class DialogStudentAddComponent {

  private _name: string = ''
  private _birthdate: Date = new Date()
  private _number: number = 0
  constructor(private _matDialog: MatDialog, private _studentService: StudentService,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  set birthdate(value: Date) {
    this._birthdate = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  public onAddSubmit(form: NgForm) {
    let student: Student = new Student()
    student.setName = this._name
    student.setBirthdate = this._birthdate
    student.setNumber = this._number
    student.setGroupId = this.data.groupId
    this._studentService.addStudent(student)
    this._matDialog.closeAll()
  }
}

import {Component, Inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {StudentService} from "../service/StudentService";
import {Student} from "../../dto/Student";

@Component({
  selector: 'app-dialog-student-edit',
  templateUrl: './dialog-student-edit.component.html',
  styleUrls: ['./dialog-student-edit.component.css']
})
export class DialogStudentEditComponent {

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

  public onEditSubmit(form: NgForm) {
    this._studentService.editStudent(this.data.id, this._name,
      this._birthdate, this._number, this.data.groupId)
    this._matDialog.closeAll()
  }
}

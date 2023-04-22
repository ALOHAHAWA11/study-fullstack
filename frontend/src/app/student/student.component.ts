import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {GroupService} from "../service/GroupService";
import {Group} from "../../dto/Group";
import {MatDialog} from "@angular/material/dialog";
import {DialogStudentAddComponent} from "../dialog-student-add/dialog-student-add.component";
import {StudentService} from "../service/StudentService";
import {DialogStudentEditComponent} from "../dialog-student-edit/dialog-student-edit.component";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private _id: number = 0;
  private _student_id: number = 0
  private _group: Group = new Group();
  private _subscription: Subscription = new Subscription();

  constructor(private _activatedRoute: ActivatedRoute, private _groupService: GroupService,
              private _matDialog: MatDialog, private _studentService: StudentService) {
  }

  public get group() {
    return this._group;
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => (this._id = params['id']));
    this._subscription = this._groupService.getStudents(this._id).subscribe((data: any) => this._group = data);
  }

  public set_student_id(value: number) {
    this._student_id = value
  }

  public openAddDialog() {
    this._matDialog.open(DialogStudentAddComponent, {
      width : '30%',
      data : {
        groupId: this._id
      }
    })
  }

  public openEditDialog() {
    this._matDialog.open(DialogStudentEditComponent, {
      width: '30%',
      data: {
        groupId: this._id,
        id: this._student_id
      }
    })
  }

  public deleteStudent() {
    this._studentService.deleteStudent(this._id)
  }
}

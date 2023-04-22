import {Component, Inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {GroupService} from "../service/GroupService";
import {Group} from "../../dto/Group";

@Component({
  selector: 'app-dialog-groups',
  templateUrl: './dialog-groups-edit.component.html',
  styleUrls: ['./dialog-groups-edit.component.css']
})
export class DialogGroupsEditComponent {

  private _number: number = 0;

  constructor(private _matDialog: MatDialog, private _groupService: GroupService,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    console.log(data)
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  public onEditSubmit(form: NgForm) {
    this._groupService.editGroup(this.data.id, this._number)
    this._matDialog.closeAll()
  }

}

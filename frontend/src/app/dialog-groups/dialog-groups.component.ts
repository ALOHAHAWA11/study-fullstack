import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {GroupService} from "../service/GroupService";
import {Group} from "../../dto/Group";

@Component({
  selector: 'app-dialog-groups',
  templateUrl: './dialog-groups.component.html',
  styleUrls: ['./dialog-groups.component.css']
})
export class DialogGroupsComponent {
  private _number: number = 0;
  constructor(private _matDialog: MatDialog, private _groupService: GroupService) {

  }
  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }
  public onAddSubmit(form: NgForm) {
    let group: Group = new Group()
    group.setName = this._number
    this._groupService.addGroup(group)
    this._matDialog.closeAll()
  }

}

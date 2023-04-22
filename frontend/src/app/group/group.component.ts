import {Component, DoCheck, OnInit} from '@angular/core';
import {Group} from "../../dto/Group";
import {Student} from "../../dto/Student";
import {Subscription} from "rxjs";
import {GroupService} from "../service/GroupService";
import {MatDialog} from "@angular/material/dialog";
import {DialogGroupsComponent} from "../dialog-groups/dialog-groups.component";
import {DialogGroupsEditComponent} from "../dialog-groups-edit/dialog-groups-edit.component";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  private _groups: Group[] = [];
  private _id: number = 0;

  private _subscription$: Subscription = new Subscription();

  constructor(private _groupService: GroupService, private _matDialog: MatDialog) {
  }

  ngOnInit() {
    this._subscription$ = this._groupService.getGroups().subscribe((data: any) => this._groups = data);
    console.log(this._groups)
  }

  public get groups() {
    return this._groups
  }

  public openAddDialog() {
    this._matDialog.open(DialogGroupsComponent, {
      width: '30%',
    })
  }

  public openEditDialog() {
    this._matDialog.open(DialogGroupsEditComponent, {
      width: '30%',
      data: {
        id: this._id
      }
    })
  }

  public set_group_id(value: number) {
    this._id = value
    console.log(this._id)
  }

  public deleteGroup() {
    this._groupService.deleteGroup(this._id)
  }


}

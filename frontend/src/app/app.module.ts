import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {GroupComponent} from './group/group.component';
import {StudentComponent} from './student/student.component';
import {GroupService} from "./service/GroupService";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogGroupsComponent} from "./dialog-groups/dialog-groups.component";
import { DialogGroupsEditComponent } from './dialog-groups-edit/dialog-groups-edit.component';
import { DialogStudentAddComponent } from './dialog-student-add/dialog-student-add.component';
import {StudentService} from "./service/StudentService";
import { DialogStudentEditComponent } from './dialog-student-edit/dialog-student-edit.component';

const appRoutes: Routes = [
  {path: 'groups', component: GroupComponent},
  {path: 'groups/:id', component: StudentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    StudentComponent,
    DialogGroupsComponent,
    DialogGroupsEditComponent,
    DialogStudentAddComponent,
    DialogStudentEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    GroupService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

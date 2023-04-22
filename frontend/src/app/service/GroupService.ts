import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Group} from "../../dto/Group";
import {Student} from "../../dto/Student";
import {environment} from "../../environments/environment.development";

@Injectable()
export class GroupService {
  constructor(private _http: HttpClient) {
  }

  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:password'),
    })
  }

  public getGroups(): Observable<Group[]> {
    return this._http.get(environment.apiUrl + '/api/groups', this._httpOptions).pipe(map((data: any) => {
      let groupsArray = data
      return groupsArray.map((group: any): Group => {
        return new Group(group['id'], group['name']);
      })
    }))
  }

  public getStudents(id: number): Observable<Group> {
    return this._http.get(environment.apiUrl + `/api/groups/${id}`, this._httpOptions).pipe(map((data: any) => {
      let group = data;
      let students: Student[] = [];
      for (let student of group.students) {
        students.push(new Student(student['id'], student['name'], student['birthdate'], student['number']));
      }
      return new Group(group['id'], group['name'], students)
    }))
  }

  public addGroup(group: Group) {
    return this._http.post(environment.apiUrl + '/api/groups', group, this._httpOptions)
      .subscribe(() => console.log("group added"))
  }

  public deleteGroup(id: number) {
    if (id == 0) return;
    return this._http.delete(environment.apiUrl + `/api/groups/${id}`, this._httpOptions)
      .subscribe(() => console.log("group deleted"))
  }

  public editGroup(id: number, name: number) {
    return this._http.put(environment.apiUrl + `/api/groups`, new Group(id, name), this._httpOptions)
      .subscribe(() => console.log("group edited"))
  }
}

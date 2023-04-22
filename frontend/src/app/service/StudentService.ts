import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Student} from "../../dto/Student";
import {Inject, Injectable} from "@angular/core";
import {Group} from "../../dto/Group";
import {environment} from "../../environments/environment.development";

@Injectable()
export class StudentService {
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:password'),
    })
  }

  constructor(private _http: HttpClient) {
  }

  public addStudent(student: Student) {
    return this._http.post(environment.apiUrl + '/api/students', student, this._httpOptions)
      .subscribe(() => console.log("student added"))
  }

  public deleteStudent(id: number) {
    return this._http.delete(environment.apiUrl + `/api/students/${id}`, this._httpOptions)
      .subscribe(() => console.log("user deleted"))
  }

  public editStudent(id: number, name: string, birthdate: Date, number: number, groupId: number) {
    return this._http.put(environment.apiUrl + `/api/students`, new Student(id, name, birthdate, number, groupId),
      this._httpOptions)
      .subscribe(() => console.log("group edited"))
  }
}

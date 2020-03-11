import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, of, Subject } from "rxjs";
import { User } from "./user.model";
@Injectable()
export class UserService {
  selectedUser: User = new User();
  users: User[];
  readonly baseURL = "http://localhost:3000/api/v1/users";
  constructor(private http: HttpClient) {}
  getUserList() {
    return this.http.get(this.baseURL);
  }
}

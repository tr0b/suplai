import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  logIn(email: string, password: string) {
    console.log(email);
    console.log(password);
    return this.http.post("http://localhost:3000/api/v1/login", {
      email: email,
      password: password,
      withCredentials: true,
      credentials: "include"
    });
  }
}

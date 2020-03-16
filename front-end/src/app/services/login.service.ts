import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  logIn(email: string, password: string) {
    return this.http.post(
      "http://localhost:3000/api/v1/login",
      {
        email: email,
        password: password
      },
      {
        withCredentials: true,
        headers: new HttpHeaders().append("Content-Type", "application/json")
      }
    );
  }

  logOut() {
    console.log("estamos aca");
    return this.http.get("http://localhost:3000/api/v1/logout");
  }
}

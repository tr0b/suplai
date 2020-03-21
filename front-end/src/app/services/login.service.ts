import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient, private auth: AuthService) {}

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
    this.auth.currentUser = null;
    return this.http.get("http://localhost:3000/api/v1/logout", {
      responseType: "text"
    });
  }
}

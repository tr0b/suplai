import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "../../../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.loginService
      .logIn(form.value.email, form.value.password)
      .subscribe((data:any) => {
        console.log(data.name);
        window.localStorage.setItem("name", data.name + " " + data.last_name);
        this.router.navigate(["/home"]);
      });
  }
}

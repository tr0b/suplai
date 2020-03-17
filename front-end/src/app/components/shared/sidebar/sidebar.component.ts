import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  cerrarSesion() {
    this.loginService.logOut().subscribe(data => {
      this.router.navigate(["/login"]);
      console.log(data);
    });
  }

  getName(){
    return window.localStorage.getItem("name");
  }
}

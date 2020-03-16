import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../../services/login.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  cerrarSesion() {
    this.loginService.logOut().subscribe(data => {
      console.log(data);
    });
  }
}

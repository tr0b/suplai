import { Component } from "@angular/core";
import { AuthService } from './services/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Suplai";
  constructor (private auth:AuthService){
    auth.getCurrentUser();
  }
}

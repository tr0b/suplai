import { Component, OnInit } from "@angular/core";
import { ReqisicionesService } from "../../services/reqisiciones.service";

@Component({
  selector: "app-requisiciones",
  templateUrl: "./requisiciones.component.html",
  styleUrls: ["./requisiciones.component.css"]
})
export class RequisicionesComponent implements OnInit {
  requisicionces: any[] = [];

  constructor(public requsicionesService: ReqisicionesService) {
    this.requisicionces = requsicionesService.obtenerRequisiones();
  }

  ngOnInit() {}
}

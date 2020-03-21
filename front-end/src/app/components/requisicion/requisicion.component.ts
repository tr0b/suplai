import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ReqisicionesService } from "../../services/reqisiciones.service";
import { RequisicionModel } from "../../models/requesicion.model";

@Component({
  selector: "app-requisicion",
  templateUrl: "./requisicion.component.html",
  styleUrls: ["./requisicion.component.css"]
})
export class RequisicionComponent implements OnInit {
  requisicion: RequisicionModel;

  constructor(
    private router: ActivatedRoute,
    private requisicionesService: ReqisicionesService
  ) {
    this.router.params.subscribe(params => {
      this.obtenerRequisicionPorID(params["id"]);
    });
  }

  ngOnInit() {}

  obtenerRequisicionPorID(id: string) {
    this.requisicionesService
      .obtenerRequisicionPorID(id)
      .subscribe((data: RequisicionModel) => {
        this.requisicion = data;
        console.log(this.requisicion);
      });
  }
}

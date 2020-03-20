import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ReqisicionesService } from "../../services/reqisiciones.service";

@Component({
  selector: "app-agregar-requisicion",
  templateUrl: "./agregar-requisicion.component.html",
  styleUrls: ["./agregar-requisicion.component.css"]
})
export class AgregarRequisicionComponent implements OnInit {
  forma: FormGroup;
  constructor(public requsicionesService: ReqisicionesService) {
    this.forma = new FormGroup({
      title: new FormControl("", Validators.required),
      budget: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  guardarCambios() {
    console.log("fff");
    console.log(this.forma.value);
    console.log(this.forma);
    this.requsicionesService
      .crearRequisicion(this.forma.value)
      .subscribe(data => console.log(data));
  }
}

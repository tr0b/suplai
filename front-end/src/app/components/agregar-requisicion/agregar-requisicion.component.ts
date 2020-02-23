import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-agregar-requisicion",
  templateUrl: "./agregar-requisicion.component.html",
  styleUrls: ["./agregar-requisicion.component.css"]
})
export class AgregarRequisicionComponent implements OnInit {
  forma: FormGroup;
  constructor() {
    this.forma = new FormGroup({
      nombre: new FormControl("", Validators.required),
      apellido: new FormControl("", Validators.required),
      descripcion: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
  }
}

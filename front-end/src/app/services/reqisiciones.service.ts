import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ReqisicionesService {
  private requisiciones: any[] = [
    {
      ID: "1",
      titulo: "Req 1",
      descripcion: "req 1",
      costo: 999,
      estadoSolicitud: 1,
      fecha: new Date()
    },
    {
      ID: "1",
      titulo: "Req 1",
      descripcion: "req 1",
      costo: 999,
      estadoSolicitud: 1,
      fecha: new Date()
    },
    {
      ID: "1",
      titulo: "Req 1",
      descripcion: "req 1",
      costo: 999,
      estadoSolicitud: 1,
      fecha: new Date()
    },
    {
      ID: "1",
      titulo: "Req 1",
      descripcion: "req 1",
      costo: 999,
      estadoSolicitud: 1,
      fecha: new Date()
    }
  ];

  constructor() {}

  obtenerRequisiones() {
    return this.requisiciones;
  }
}

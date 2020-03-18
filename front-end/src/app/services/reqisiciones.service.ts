import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RequisicionModel } from "../models/requesicion.model";

@Injectable({
  providedIn: "root"
})
export class ReqisicionesService {
  constructor(private http: HttpClient) {}

  obtenerRequisiones() {
    return this.http.get("http://localhost:3000/api/v1/requisitions", {
      withCredentials: true
    });
  }

  obtenerRequisicionPorID(id: string) {
    return this.http.get("http://localhost:3000/api/v1/requisition/" + id, {
      withCredentials: true
    });
  }

  crearRequisicion(requisicion: RequisicionModel) {
    return this.http.post("http://localhost:3000/api/v1/requisition", {
      withCredentials: true,
      title: requisicion.title,
      description: requisicion.description,
      budget: requisicion.budget
    });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    return this.http.get("http://localhost:3000/api/v1/requisitions/" + id, {
      withCredentials: true
    });
  }

  crearRequisicion(requisicion: any) {
    var numBudget = +requisicion.budget;
    return this.http.post(
      "http://localhost:3000/api/v1/requisition",
      {
        title: requisicion.title,
        description: requisicion.description,
        budget: numBudget
      },
      {
        withCredentials: true,
        headers: new HttpHeaders().append("Content-Type", "application/json")
      }
    );
  }
}

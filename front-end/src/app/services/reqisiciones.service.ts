import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ReqisicionesService {
  constructor(private http: HttpClient) {}

  obtenerRequisiones() {
    return this.http.get("http://localhost:3000/api/v1/requisitions");
  }
}

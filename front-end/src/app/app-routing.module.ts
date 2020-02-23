import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RequisicionesComponent } from "./components/requisiciones/requisiciones.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { AgregarUsuarioComponent } from "./components/agregar-usuario/agregar-usuario.component";
import { AgregarRequisicionComponent } from "./components/agregar-requisicion/agregar-requisicion.component";
import { RegistroComponent } from "./components/shared/registro/registro.component";
import { LoginComponent } from "./components/shared/login/login.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "requisiciones", component: RequisicionesComponent },
  { path: "agregarRequisicion", component: AgregarRequisicionComponent },
  { path: "usuarios", component: UsuariosComponent },
  { path: "agregarUsuario", component: AgregarUsuarioComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

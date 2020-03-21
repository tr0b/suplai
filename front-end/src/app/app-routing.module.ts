import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RequisicionesComponent } from "./components/requisiciones/requisiciones.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { AgregarUsuarioComponent } from "./components/agregar-usuario/agregar-usuario.component";
import { AgregarRequisicionComponent } from "./components/agregar-requisicion/agregar-requisicion.component";
import { RegistroComponent } from "./components/shared/registro/registro.component";
import { LoginComponent } from "./components/shared/login/login.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { RequisicionComponent } from "./components/requisicion/requisicion.component";
import { GuardService } from './services/guard.service';
import { ReportesComponent } from './components/reportes/reportes.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "requisiciones", component: RequisicionesComponent },
  { path: "agregarRequisicion", component: AgregarRequisicionComponent },
  { path: "requisicion/:id", component: RequisicionComponent },
  { path: "usuarios", canActivate:[GuardService], data:{allowedRole:"admin"}, component: UsuariosComponent },
  { path: "usuario/:id", component: UsuarioComponent },
  { path: "agregarUsuario", component: AgregarUsuarioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "reportes", canActivate:[GuardService], data:{deniedRole:"BUYER"}, component: ReportesComponent },
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

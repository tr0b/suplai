import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./components/shared/sidebar/sidebar.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { RequisicionesComponent } from "./components/requisiciones/requisiciones.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/shared/login/login.component";
import { RegistroComponent } from "./components/shared/registro/registro.component";
import { ReportesComponent } from "./components/reportes/reportes.component";
import { AgregarUsuarioComponent } from "./components/agregar-usuario/agregar-usuario.component";
import { AgregarRequisicionComponent } from "./components/agregar-requisicion/agregar-requisicion.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    UsuariosComponent,
    RequisicionesComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ReportesComponent,
    AgregarUsuarioComponent,
    AgregarRequisicionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

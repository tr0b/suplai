import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private service:UsuariosService) { }

  public currentUser: UsuarioModel;

  getCurrentUser(){
    this.service.getCurrent().subscribe((user:UsuarioModel)=> {
      this.currentUser=user;
    })
  }




}

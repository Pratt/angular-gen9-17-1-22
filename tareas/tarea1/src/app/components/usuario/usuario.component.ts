import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios:string = "";

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
  }

  mostrarUsuarios(){
    let users = this.usuariosService.getUsuarios();
    this.usuarios = JSON.stringify(users);
  }

}

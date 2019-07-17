import { Component, OnInit } from '@angular/core';
import {UsuariosService} from './services/usuarios.service'
import {User} from './models/usuarios'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  usuarios:User[] = []

  constructor (public userService : UsuariosService){

  }

  ngOnInit(){
    this.userService.getUser()
      .subscribe(
        usuarios => {
          console.log(usuarios)
          this.usuarios = usuarios

        },
        err => console.log(err)
      )
  }    
}
  



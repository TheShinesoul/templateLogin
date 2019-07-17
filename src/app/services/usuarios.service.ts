import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// para poder realizar peticiones HTTP
import {User} from '../models/usuarios'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http : HttpClient) { }

  getUser(){
  return  this.http.get<User[]>('https://jsonplaceholder.typicode.com/users?_limit=3')
      
  }
}

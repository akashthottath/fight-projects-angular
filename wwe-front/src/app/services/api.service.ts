import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSchema } from '../modules/users/user.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // property
  base_url:string="http://localhost:3000"

  constructor(private http:HttpClient) { }
  // get all users from backend
  getAllUsers(){
  return this.http.get(`${this.base_url}/users`)
  }

  // add user
  addUser(user:UserSchema){
  return  this.http.post(`${this.base_url}/users`,user)
  }
  // edit/get id related user data
  getExisting(id:any){
   return this.http.get(`${this.base_url}/users/${id}`)
  }
  // edit user
  updateUser(id:any,data:UserSchema){
    return this.http.put(`${this.base_url}/users/${id}`,data)
  }
  // delete
  deleteUser(id:any){
    return this.http.delete(`${this.base_url}/users/${id}`)
  }
}

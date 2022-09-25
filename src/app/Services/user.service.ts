import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public addUser(user :any){
    return this.http.post(`${baseUrl}/user/`,user)
  }

  public getAllUser(){
    return this.http.get(`${baseUrl}/user/getAllUser`);
  }

  // single user

  public getUser(id:any){
      return this.http.get(`${baseUrl}/user/${id}`);
  }

  //update user

  public update(user:any){
    return this.http.put(`${baseUrl}/user/update`,user);
  }

  // delete user

  public delete(id:any){
     return this.http.delete(`${baseUrl}/user/delete/${id}`);
  }

  public addContact(user :any){
    return this.http.post(`${baseUrl}/contactus/post`,user)
  }
  
}

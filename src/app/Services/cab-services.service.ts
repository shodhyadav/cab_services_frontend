import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CabServicesService {

  constructor(private http:HttpClient) { }

  public addCab(user :any){
    return this.http.post(`${baseUrl}/cab/`,user)
  }

  public getAllCab(){
    return this.http.get(`${baseUrl}/cab/getAllCab`);
  }

  // single user

  public getCab(id:any){
      return this.http.get(`${baseUrl}/cab/${id}`);
  }

  //update user

  public update(user:any){
    return this.http.put(`${baseUrl}/cab/update`,user);
  }

  // delete user

  public delete(id:any){
     return this.http.delete(`${baseUrl}/cab/delete/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  public getAllAdmin(){
    return this.http.get(`${baseUrl}/admin/getAllAdmin`);
  }
  public update(user:any){
    return this.http.put(`${baseUrl}/admin/update`,user);
  }
}

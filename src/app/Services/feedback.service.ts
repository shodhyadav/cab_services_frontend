import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  public addFeedback(user :any){
    return this.http.post(`${baseUrl}/feedback/`,user)
  }

  public getAllFeedback(){
    return this.http.get(`${baseUrl}/feedback/getAllUser`);
  }

  // single user

  public getFeedback(id:any){
      return this.http.get(`${baseUrl}/feedback/${id}`);
  }

  //update user

  public update(user:any){
    return this.http.put(`${baseUrl}/feedback/update`,user);
  }

  // delete user

  public delete(id:any){
     return this.http.delete(`${baseUrl}/feedback/delete/${id}`);
  }
}

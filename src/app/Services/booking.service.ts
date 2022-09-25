import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  public addBooking(booking:any){
    return this.http.post(`${baseUrl}/booking/`, booking);
  }

  public getBooking(id:any){
    return this.http.get(`${baseUrl}/booking/${id}`);
  }

  public updatBooking(booking:any){
    return this.http.put(`${baseUrl}/booking/update`,booking);
  }

  public deleteBooking(id:any){
    return this.http.delete(`${baseUrl}/booking/delete/${id}`);
  }

  public getAllBooking(){
    return this.http.get(`${baseUrl}/booking/getAllBooking`);
  }
  public getAllCabs(){
    return this.http.get(`${baseUrl}/cab/getAllCab`);
  }

  public updateCab(cab:any){
    return this.http.put(`${baseUrl}/cab/update`,cab);
  }

  public getCab(id:any){
    return this.http.get(`${baseUrl}/cab/${id}`);
  }
  
}

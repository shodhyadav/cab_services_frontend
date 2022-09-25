import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  public logInStatusSubject = new Subject<boolean>();

  //Current user which is loggedIn

  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current`);

  }

  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData)
  }

  //Set token to local user

  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  //isLogin User is log in or not

  public isLoggedin() {
    let tokenStr = localStorage.getItem('token');

    if (tokenStr == undefined || tokenStr == "" || tokenStr == null)
      return false;
    return true;
  }

  //Logout  Remove token from localstorage

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //getToken

  public getToken() {
    return localStorage.getItem('token');
  }

  // User Detail 

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Get User

  public getUser() {
    let userStr = localStorage.getItem('user');

    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  // get User Role

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}

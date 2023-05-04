import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient:HttpClient) { }
  userData:any
  sveUserData()
  {
  let encodedData=JSON.stringify( localStorage.getItem('token'))
  let decodedData:any=jwt_decode(encodedData)
  this.userData.next(decodedData)
  console.log(this.userData)
  localStorage.setItem('decodeToken',JSON.stringify( this.userData) )
  }

  signUp(formData:object):Observable<any>
  {
    return this.HttpClient.post('https://tap-cash-ti5d.onrender.com/api/v1/auth/signup',formData)
  }
  signIn(formData:object):Observable<any>
  {
    return this.HttpClient.post('https://tap-cash-ti5d.onrender.com/api/v1/auth/login',formData)
  }
  checkExistingAccount(formData:object):Observable<any>
  {
    return this.HttpClient.post('https://tap-cash-ti5d.onrender.com/api/v1/auth/forgetPassword',formData)
  }
  sendOtp(formData:object):Observable<any>
  {
    return this.HttpClient.post('https://tap-cash-ti5d.onrender.com/api/v1/auth/verify',formData)
  }
 resetPassword(formData:object):Observable<any>
  {
    return this.HttpClient.put('https://tap-cash-ti5d.onrender.com/api/v1/auth/resetPassword',formData)
  }
}

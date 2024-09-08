import { HttpClient } from '@angular/common/http';
import { afterNextRender, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  userData = new BehaviorSubject(null);


  constructor(private _HttpClient:HttpClient,private _Router:Router) {

    // if(localStorage.getItem('userToken') !==null){
    //   this.decodeUserData();
    // }
    afterNextRender(() => {

      if (localStorage.getItem('userToken') !== null) {
          this.decodeUserData();
      }
    });

  }

  register(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData);
  }
  login(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData);
  }

  logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);

  }
  decodeUserData(){
    let encodedtoken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedtoken:any = jwtDecode(encodedtoken);
    console.log(decodedtoken);
    this.userData.next(decodedtoken);

  }

}

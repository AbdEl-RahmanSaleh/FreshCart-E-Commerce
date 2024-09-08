import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isLogin:boolean = false;
logout(){
  this._AuthService.logout();
}
  constructor(private _AuthService:AuthService)
  {
  _AuthService.userData.subscribe({
    next: (data) => {
      if(_AuthService.userData.getValue()!== null){
        this.isLogin =true
      }
      else{
        this.isLogin = false

      }
    }
  })

  }
}


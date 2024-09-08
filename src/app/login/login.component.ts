import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,}$/)]),
    
  })

  isLoading:boolean = false ;
  apiError:string = ''
  handlelogin(loginForm:FormGroup)
  {
    this.isLoading = true;
    if(loginForm.valid){

      this._AuthService.login(loginForm.value).subscribe({
        next:(response)=>{
          console.log(response);
          if(response.message === 'success'){

            localStorage.setItem('userToken',response.token);
            this._AuthService.decodeUserData()
            this.isLoading = false ;
            this._Router.navigate(['/home'])
          }
        },
        error:(err)=>{
          this.isLoading = false ;
          this.apiError = err.error.message;
        }
      })

    }

  }
}

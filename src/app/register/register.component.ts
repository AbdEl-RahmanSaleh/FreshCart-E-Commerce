import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(3) ,Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,}$/)]),
    rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,}$/)]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  isLoading:boolean = false ;
  apiError:string = ''
  handleRegister(registerForm:FormGroup)
  {
    this.isLoading = true;
    if(registerForm.valid){

      this._AuthService.register(registerForm.value).subscribe({
        next:(response)=>{
          console.log(response);
          if(response.message === 'success'){
            //Navigate To Login
            this.isLoading = false ;
            this._Router.navigate(['/login'])
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

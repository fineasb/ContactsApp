import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;
  spinner: boolean = false;
  constructor(private fb:FormBuilder, private router:Router) { }
 

  ngOnInit(): void {
      this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [ '', [Validators.required, Validators.minLength(4)]]
    })
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  LogIn(){
    console.log(this.loginForm.value);
    this.spinner = true;
    setTimeout( () => { 
    if(this.loginForm.invalid){
      return;
    }
    this.router.navigate(['/home']);
     }, 900 );
  }

}


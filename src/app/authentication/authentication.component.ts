import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb:FormBuilder) { }
 

  ngOnInit(): void {
    

      this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [ '', [Validators.required, Validators.minLength(4)]]
    })
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  SendIt(){
    console.log(this.loginForm.value);
  }

}


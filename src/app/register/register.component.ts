import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor() { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      username : new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]),
      confirmpassword: new FormControl('',Validators.required)

    },this.passwordMatchValidator);
  }

  passwordMatchValidator(g:FormGroup){

    return  g.get('password').value === g.get('confirmpassword').value? null :{'mismatch':true};

   
  }
  register(){
    console.log(this.registerForm.value)
  }

}

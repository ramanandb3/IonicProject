import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  ionicForm: FormGroup;
  isRegister = false; 

  constructor(public formBuilder: FormBuilder,private router:Router) {
    this.ionicForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      // dob:  new FormControl(),
      phone:  new FormControl(),
    })
   }

  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      name:["", Validators.required],
      email:['',Validators.required],
      password: ['', [Validators.required]]
    })
  }
  
  

  get errorControl (){
    return this.ionicForm.controls;
  };

  registerForm(){
    this.isRegister=true;
    if(!this.ionicForm.valid){
      alert('provide all the required values')
      return false;
    }
    else{
      window.localStorage.setItem(this.ionicForm.value.email,JSON.stringify(this.ionicForm.value));
      alert("Registerd successfully")
      // window.location.href="./login";
      this.router.navigate(['./login'])
    }
  }
  // cancelForm(){
  //   window.location.href="./login";
  // }    
}

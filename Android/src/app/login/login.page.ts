import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isLogin = false;

  constructor(public formBuilder: FormBuilder) { 
    this.ionicForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone:  new FormControl(),
    })
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      // dob: [],
     password: ['', [Validators.required]]
    })
  }


  get errorControl() {
    return this.ionicForm.controls;
  }

  onSubmit() {

  this.isLogin = true;
    // let val = JSON.parse(JSON.stringify(localStorage.getItem(this.ionicForm.value.email) || '{}'))
    let val = JSON.parse(localStorage.getItem(this.ionicForm.value.email) || '{}')
    // alert(val)
    if(this.ionicForm.value.email == val.email && this.ionicForm.value.password == val.password ) {
      alert("!sucessfully logedIn")
      window.location.href="./welcome";
    } else {
      let test = this.ionicForm.value.email + " "+ val.email + " & " + this.ionicForm.value.password + " "+ val.password;

      alert("Login failed"+  test)

    }
    console.log(this.ionicForm.value.email)
     console.log(val.email)
  }
}

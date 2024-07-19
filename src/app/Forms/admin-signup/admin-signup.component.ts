import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

 
  signupUser : any[] = [];
  signupObj :any = {
    userName : '',
    email : '',
    password : ''
  };
  
  loginObj : any = {
    userName : '',
    password : ''
  };

  constructor(private router : Router) { }

  ngOnInit(): void {

    const localData = localStorage.getItem('signupUser');
    if(localData != null){
      this.signupUser = JSON.parse(localData);
    }

  }

  onSignup(){
    this.signupUser.push(this.signupObj);
    localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
    this.signupObj = {
      userName : '',
      email : '',
      password : ''
    };
  }

  onLogin(){

    const isUserExist = this.signupUser.find( m => m.email == this.loginObj.email && m.password == this.loginObj.password)
    if(isUserExist != undefined){
      alert('User login successfully');
      this.router.navigate(['/admin-login'])
    }else{
      alert('Wrong credentials');
    }
  }
}

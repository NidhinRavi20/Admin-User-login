import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

 
  loginUser : any[] = [];
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

    const localData = localStorage.getItem('loginUser');
    if(localData != null){
      this.loginUser = JSON.parse(localData);
    }

  }

  onSignup(){
    this.loginUser.push(this.signupObj);
    localStorage.setItem('loginUser', JSON.stringify(this.loginUser));
    this.signupObj = {
      userName : '',
      email : '',
      password : ''
    };
  }

  onLogin(){

    const isUserExist = this.loginUser.find( m => m.email == this.loginObj.email && m.password == this.loginObj.password)
    if(isUserExist != undefined){
      alert('User login successfully');
      this.router.navigate(['/user-login'])
    }else{
      alert('Wrong credentials');
    }
  }

}

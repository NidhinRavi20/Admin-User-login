import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  form !: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  contactRegex: string = "[789][0-9]{9}";
  nameRegex : string = "[A-Za-z ]+"

  submittedForm !: any;

  constructor( fb : FormBuilder, private router : Router, private userDataService : UserDataService) {

    this.form = fb.group({
      name : ['', [Validators.required, Validators.pattern(this.nameRegex)]],
      email : ['', [Validators.required,Validators.pattern(this.emailRegex)]],
      phone : ['', [Validators.required,Validators.pattern(this.contactRegex)]],
    })

   }

   get name (){
    return this.form.get('name');
  }
  
  get email (){
    return this.form.get('email');
  }

  get phone (){
    return this.form.get('phone');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      this.userDataService.setUserData(this.form.value);
      this.router.navigate(['/user-details'])
    }
  }

}

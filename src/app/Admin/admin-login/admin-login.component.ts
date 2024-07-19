import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDataService } from 'src/app/services/admin-data.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  form !: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  contactRegex: string = "[789][0-9]{9}";
  nameRegex : string = "[A-Za-z ]+"

  submittedForm !: any;

  selectedFile: File | null = null;
  fileError: string | null = null;


  constructor( fb : FormBuilder, private router : Router, private adminDataService : AdminDataService) {

    this.form = fb.group({
      name : ['', [Validators.required, Validators.pattern(this.nameRegex)]],
      email : ['', [Validators.required,Validators.pattern(this.emailRegex)]],
      phone : ['', [Validators.required,Validators.pattern(this.contactRegex)]],
      music : ['', [Validators.required]],
      artist : ['', [Validators.required, Validators.pattern(this.nameRegex)]]
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

  get music (){
    return this.form.get('music');
  }

  get artist (){
    return this.form.get('artist');
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.validateFileType();
  }

  validateFileType() {
    if (this.selectedFile) {
      const allowedTypes = ['audio/mp3', 'video/mp4'];
      if (!allowedTypes.includes(this.selectedFile.type)) {
        this.fileError = null;
        this.selectedFile = null;
      } else {
        
        this.fileError = 'Only MP3 and MP4 files are allowed.';
      }
    }
  }

   onSubmit(){
    if(this.form.valid){
      this.adminDataService.setUserData(this.form.value);
      this.router.navigate(['/admin-details'])
    }
   }

}



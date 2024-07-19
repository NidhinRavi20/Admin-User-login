import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  private adminData : any = {};

  setUserData(admin : any){
    this.adminData = admin;
  }

  getUserData(){
    return this.adminData;
  }


  constructor() { }
}

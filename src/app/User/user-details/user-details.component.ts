import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userData : any

  constructor(private route : ActivatedRoute, private userDataService : UserDataService) { }

  ngOnInit(): void {

    this.userData = this.userDataService.getUserData();

  }

}

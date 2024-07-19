import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDataService } from 'src/app/services/admin-data.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  adminData : any

  constructor(private route : ActivatedRoute, private adminDataService : AdminDataService) { }

  ngOnInit(): void {

    this.adminData = this.adminDataService.getUserData();

  }
}

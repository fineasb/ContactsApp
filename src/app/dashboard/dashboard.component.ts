import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  spinner:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  logOut(){
    this.spinner = true;
    setTimeout( () => {
      this.router.navigate(['']);
       }, 900 );
  }

}

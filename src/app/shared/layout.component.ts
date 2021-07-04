import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showFiller = false;
  spinner:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  favorite() {
    this.router.navigate(['/home/favorite']);
  }

  contact() {
    this.router.navigate(['/home/contact']);
  }

  logOut(){
    this.spinner = true;
    setTimeout( () => {
      this.router.navigate(['']);
       }, 900 );
  }

}

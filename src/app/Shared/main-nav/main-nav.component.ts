import { Component, OnInit } from '@angular/core';
import *as AOS from 'aos';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor() {
    // for keep navbar when scrolling in y axis
    // window.addEventListener ('scroll' , function(){
    //   var matTolBar:any = document.querySelector("mat-toolbar");
    //   matToolBar.classList.toggle("sticky", window.scrollY>0);
    // })

    window.addEventListener('scroll' , function(){
      var matToolBar = document.querySelector("mat-toolbar");
      matToolBar?.classList.toggle("sticky" , window.scrollY>0);
    })
  }

  ngOnInit(): void {

  }

}

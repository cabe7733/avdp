import { Component, OnInit,AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { jarallax, jarallaxElement, jarallaxVideo } from 'jarallax';
declare var jarallax: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public url:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    jarallaxVideo(); jarallax(document.querySelectorAll('.jarallax')); jarallaxElement();
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        let descomponer = e.url.split('/');
        this.url=descomponer[1];
        console.log(this.url);
      }
    });
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

}

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMobile?: boolean = false;
  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 800 ? true : false;
  }
  ngOnInit(): void {
    if (window.innerWidth <= 800) this.isMobile = true;
  }
}

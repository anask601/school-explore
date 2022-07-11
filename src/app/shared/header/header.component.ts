import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  constructor() {}
  screenWidth!: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    // console.clear();
    this.screenWidth <= 800 ? (this.isMobile = true) : (this.isMobile = false);
  }
  ngOnInit(): void {
    if (window.innerWidth <= 800) this.isMobile = true;
  }
}

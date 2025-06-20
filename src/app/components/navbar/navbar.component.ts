import { Component, AfterViewInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  constructor(private scroller: ViewportScroller) {}

  navLinks = [
    { label: 'Home',        id: 'home' },
    { label: 'About',       id: 'about' },
    { label: 'Resume',      id: 'resume' },
    { label: 'Education',   id: 'education' },
    { label: 'Projects',    id: 'projects' },
    { label: 'Contact',     id: 'contact' }
  ];

  active = 'home';

  /** Smooth scroll to target id */
  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }

  /** Update active link based on scroll position */
  @HostListener('window:scroll') onScroll() { this.setActive(); }
  ngAfterViewInit() { this.setActive(); }

  private setActive() {
    const mid = scrollY + innerHeight / 2;
    for (const link of this.navLinks) {
      const el = document.getElementById(link.id);
      if (el && mid >= el.offsetTop && mid < el.offsetTop + el.offsetHeight) {
        this.active = link.id;
        break;
      }
    }
  }
}

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  selector: 'app-header'
})
export class HeaderComponent {
  isScrolled: boolean = false;
  isHeaderBottomHidden: boolean = false;
  isNavVisible: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > 50; 
    this.isHeaderBottomHidden = scrollPosition > 100; 
  }

  toggleNav(): void {
    this.isNavVisible = !this.isNavVisible;
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      if (this.isNavVisible) {
        navLinks.classList.add('show');
      } else {
        navLinks.classList.remove('show');
      }
    }
  }

}

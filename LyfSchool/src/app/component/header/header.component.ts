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
  isLinksVisible: boolean = false;
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > 50; 
    this.isHeaderBottomHidden = scrollPosition > 100; 
  }
  
  toggleLinks(): void {
    this.isLinksVisible = !this.isLinksVisible;
  
    const headerLinks = document.querySelector('.header-links');
    if (headerLinks) {
      headerLinks.classList.toggle('show', this.isLinksVisible);
    }
  }
}

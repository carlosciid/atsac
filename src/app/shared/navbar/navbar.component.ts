import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent {
  constructor(private router: Router) {}

  isMenuOpen = false;

  redirectToHome() {
    this.router.navigate(['/']);
  }

  redirectToRegistration() {
    this.router.navigate(['registration']);
  }

  redirectToAboutUs() {
    this.router.navigate(['/about-us']);
  }

  redirectToServices() {
    this.router.navigate(['/services']);
  }

  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

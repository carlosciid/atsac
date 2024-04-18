import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed the typo here
})
export class AppComponent implements OnInit {
  title = 'Atsac-v2';
  isDropdownOpen = false;
  isSubmenuOpen = false; // Agrega esta propiedad

  constructor(private router: Router) {}

  ngOnInit() {}

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

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

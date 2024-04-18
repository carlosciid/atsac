import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['/']);
  }

  redirectToAboutUs() {
    this.router.navigate(['/about-us']);
  }

  redirectToServices() {
    this.router.navigate(['/services']);
  }
  redirecToContactUs() {
    this.router.navigate(['/contact-us']);
  }

}

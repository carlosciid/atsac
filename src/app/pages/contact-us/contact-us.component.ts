import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
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

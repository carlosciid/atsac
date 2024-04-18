import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
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

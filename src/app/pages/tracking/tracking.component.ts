import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {
  constructor(private router: Router) {}

  navegar() {
    this.router.navigate(['/activetracking']);
  }
}

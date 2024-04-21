import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.css'
})
export class ThanksComponent {
  constructor(private router: Router) {}

ngOnInit() {
  setTimeout(() => {
    this.router.navigate(['/login']); // Navigate to the 'home' route
  }, 5000); // 5000 milliseconds = 5 seconds
}
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  user: string | null = '';
  Imagepath: string;

  constructor(private router: Router) {
    this.Imagepath = "../assets/images/Jd-logos.jpeg";
  }

  remove(): void {
    localStorage.removeItem('user');
  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if (!this.user) {
      this.router.navigateByUrl('/login');
    }
  }
}
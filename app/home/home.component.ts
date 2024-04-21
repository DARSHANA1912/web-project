import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user: string | null = '';
  username:string='';
  
  remove():void{
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    // Assuming this.user contains the email address fetched from localStorage
this.user = localStorage.getItem('user');
if (this.user) {
  const atIndex = this.user.indexOf('@'); // Find the index of '@' symbol
  if (atIndex !== -1) {
    this.username = this.user.substring(0, atIndex); // Extract the substring before '@'
    console.log(this.username); // This will log the extracted username
  }
}

  }
  imageUrl = '';

  Imagepath: string;
  Imagepath1: string;
  Imagepath2: string;
  Imagepath3: string;
  Imagepath4: string;
  Imagepath5: string;
  Imagepath6: string;
  Imagepath7: string;
  Imagepath8: string;
  Imagepath9: string;
  Imagepath10: string;
  Imagepath11: string;
  Imagepath12: string;
  Imagepath13: string;
  Imagepath14: string;
  Imagepath15: string;
  Imagepath16: string;
  imagePaths: string[] = [
    '../assets/images/g1.png',
    '../assets/images/g2.png',
    '../assets/images/g3.png',
    '../assets/images/g4.png',
    '../assets/images/g5.png'
  ];

  constructor(private router: Router) { // Inject AuthService
    this.Imagepath = "../assets/images/Jd-logos.jpeg";
    this.Imagepath1 = "../assets/images/plane.png";
    this.Imagepath2 = "../assets/images/hotel.png";
    this.Imagepath3 = "../assets/images/food.png";
    this.Imagepath4 = "../assets/images/guide.png";
    this.Imagepath5 = "../assets/images/adventure.png";
    this.Imagepath6 = "../assets/images/thaj.png";
    this.Imagepath7 = "../assets/images/temp1.jpg";
    this.Imagepath8 = "../assets/images/oldbuild.jpg";
    this.Imagepath9 = "../assets/images/kerala.jpg";
    this.Imagepath10 = "../assets/images/templ1.jpg";
    this.Imagepath11 = "../assets/images/ladh.jpg";
    this.Imagepath12 = "../assets/images/goa.jpg";
    this.Imagepath13 = "../assets/images/maha.jpg";
    this.Imagepath14 = "../assets/images/jammu.jpeg";
    this.Imagepath15 = "../assets/images/tajmahal.jpg";
    this.Imagepath16 = "../assets/images/mysore.jpg";
  }

}
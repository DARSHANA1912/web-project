import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {
  username:string='';
  password:string='';
  email:string='';
  newEmail:string='';
  constructor(private router:Router,private util:NodeUtilityService){}
  fetchUserDetails(email: string): void {
    this.util.findOne(email).subscribe((userData: any) => {
      if (userData.status && userData.user) {
        const user = userData.user;
        this.username = user.username;
        this.password = user.password;
      } else {
        console.error('User details not found');
        // Reset the username and password fields
        this.username = '';
        this.password = '';
      }
    });
  }
  
  Imagepath:string="../assets/images/Jd-logos.jpeg";
  updateUser(): void {
    const updatedUserData = {
      email: this.newEmail,
      password: this.password // Assuming you don't want to update the password
    };

    this.util.updateUser(this.username,this.email,this.password).subscribe((data: any) => {
      if (data.status) {
        console.log('User updated successfully');
      } else {
        console.error('Error updating user:', data.message);
        // Handle error, maybe display an error message to the user
      }
    });
  }
}
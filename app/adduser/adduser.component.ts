import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  msg:any;
  username:string='';
  password:string='';
  email:string='';
  user:string|null='';
  Imagepath:string="../assets/images/Jd-logos.jpeg";
  constructor(private router:Router,private util: NodeUtilityService){}
  addUser(form: any): void {
    if (form.valid) {
      this.util.insert(form.value.username, form.value.email, form.value.password)
        .subscribe((data) => {
          if (data.status) {
            console.log("User added successfully");
            this.msg = data.message;
            alert("User Added Successfully");
            this.router.navigate(['/admin']);
          }
        });
    }
  }
  
  remove():void{
    if(this.user!=null)
      localStorage.removeItem('user');
      this.user=null;
      this.router.navigate(['/home']);
  }
}
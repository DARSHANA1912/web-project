import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  msg:any;
  username:string='';
  password:string='';
  email:string='';
  user:string|null='';
  Imagepath:string="../assets/images/Jd-logos.jpeg";
  constructor(private router:Router,private util: NodeUtilityService){}
  deleteUser(form: any): void {
    if (form.valid) {
      this.util.delete(form.value.email)
        .subscribe((data) => {
          if (data.status) {
            console.log("Hello");
            this.msg = data.message;
            alert("Deactivated Successfully");
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
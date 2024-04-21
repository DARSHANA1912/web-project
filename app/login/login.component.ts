import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user1: string | null = '';
username: string = '';

ngOnInit() {
  this.user1 = localStorage.getItem('user');
  if (this.user1 !== null) {
    const atIndex = this.user1.indexOf('@');
    if (atIndex !== -1) {
      this.username = this.user1.substring(0, atIndex);
      console.log(this.username);
      alert("Dear " + this.username + ", You have logged in already");
      this.router.navigateByUrl('/home');
    }
  }
}

  constructor(private util:NodeUtilityService,private router: Router) { }
  msg:string="";
  user:string="";
  email:string="";
  password:string=""
  handleSignUp(): void {
    this.router.navigate(['/signup']); // Assuming the route is '/signup'
  }
  onSubmit(form: any): void {
      this.util.insert1(form.value.email, form.value.password).subscribe((data) => {
        if (data.status) 
        {
            localStorage.setItem("user", form.value.email);
            this.msg = data.message;
          if (form.value.email =='admin@gmail.com') {
            this.router.navigate(['/admin']); // Redirect to admin page
          } else {
            this.router.navigate(['/home']); // Redirect to home page for regular users
          }
        } 
        else {
          this.msg = data.message;
        }
  });
  }
  printError(Id: string, Msg: string) {
    const element = document.getElementById(Id);
    if (element) {
      element.innerHTML = Msg;
    }
  }

  validateForm() {
    const emailElement = <HTMLInputElement>document.querySelector("#email");
    const pwElement = <HTMLInputElement>document.querySelector("#password");
    if (!emailElement ||!pwElement) {
      return false; // Return false if any required element is missing
    }
    const email = emailElement.value;
    const pw = pwElement.value;

    let emailErr: boolean = true,pwErr:boolean=true;
  
    if (email == "") {
      this.printError("emailErr", "Please enter your email address");
      emailElement.classList.add("input-2");
      emailElement.classList.remove("input-1");
    } else {
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email) === false) {
        this.printError("emailErr", "Please enter a valid email address");
        emailElement.classList.add("input-2");
        emailElement.classList.remove("input-1");
      } else {
        this.printError("emailErr", "");
        emailErr = false;
        emailElement.classList.add("input-1");
        emailElement.classList.remove("input-2");
      }
    }
      
    if(pw == ""){
      this.printError("pwErr","Please enter your password");
      pwElement.classList.add("input-4");
      pwElement.classList.remove("input-3");
    } else {
      this.printError("pwErr", "");
      pwErr = false;
      pwElement.classList.add("input-3");
      pwElement.classList.remove("input-4");
    }
    
    if (emailErr || pwErr) {
      return false;
    }
    return true;
  }
    
}
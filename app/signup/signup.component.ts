import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  msg:string='';
  password:string='';
  username:string='';
  email:string='';
  confirmpassword:string='';
	constructor(private util: NodeUtilityService, private router: Router) {
    
  }
	
  onSubmit(form: any) {
    
      this.util.insert(form.value.username, form.value.email, form.value.password)
        .subscribe((data) => {
          if (data.status)
          {
            console.log("hello");
            this.msg = data.message;
            this.router.navigate(['/thanks']);}
          }
        );
  }
  resetForm(form:any)
  {
    form.reset();
    this.msg = '';
  }
  printError(Id: string, Msg: string) {
    const element = document.getElementById(Id);
    if (element) {
      element.innerHTML = Msg;
    }
  }

  validateForm() {
    const unameElement = <HTMLInputElement>document.querySelector("#username");
    const emailElement = <HTMLInputElement>document.querySelector("#email");
    const pwElement = <HTMLInputElement>document.querySelector("#password");
    const cpwElement = <HTMLInputElement>document.querySelector("#confirmpassword");
  
    
    

    if (!unameElement|| !emailElement ||!pwElement || !cpwElement) {
      return false; // Return false if any required element is missing
    }
    const uname = unameElement.value;
    const email = emailElement.value;
    const pw = pwElement.value;
    const cpw = cpwElement.value;

    let unameErr: boolean = true, emailErr: boolean = true,pwErr:boolean=true, cpwErr: boolean = true;
    if (uname == "") {
      this.printError("unameErr", "Please enter user name");
      unameElement.classList.add("input-2");
      unameElement.classList.remove("input-1");
    } else {
      const regex = /^[a-zA-Z0-9\s]+$/;
      if (regex.test(uname) === false) {
        this.printError("unameErr", "Please enter a valid user name");
        unameElement.classList.add("input-2");
        unameElement.classList.remove("input-1");
      } else {
        this.printError("unameErr", "");
        unameErr = false;
        unameElement.classList.add("input-1");
        unameElement.classList.remove("input-2");
      }
    }

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

    if(cpw == ""){
      this.printError("cpwErr","Please enter your password ");
      cpwElement.classList.add("input-4");
      cpwElement.classList.remove("input-3");
    } else {
      if(pw!=cpw){
        this.printError("cpwErr","password and confirm password does not match");
        emailElement.classList.add("input-2");
        emailElement.classList.remove("input-1");
      }
      else{
        this.printError("cpwErr", "");
        cpwErr = false;
        cpwElement.classList.add("input-3");
        cpwElement.classList.remove("input-4");
      }
      
    }

    if (unameErr || emailErr || pwErr || cpwErr) {
      return false;
    }
    return true;
  }
}

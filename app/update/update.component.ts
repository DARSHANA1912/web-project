import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  msg:string='';
  email:string='';
  password:string='';
  onSubmit(form: any) {
    console.log(form.valid);
    if(form.valid){
      this.util
        .update(form.value.email, form.value.password)
        .subscribe((data) => {
          if (data.status) this.msg = data.message;
          this.router.navigate(['/thanks']);
        });
    }
  }
  constructor(private util:NodeUtilityService,private router: Router) { }
  resetForm(form:any)
  {
    form.reset();
    this.msg = '';
  }
}
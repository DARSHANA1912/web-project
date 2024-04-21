import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent {
  msg:string="";
  Imagepath = "../assets/images/Jd-logos.jpeg";
  sList:any[]=[];
  constructor(private util:NodeUtilityService){
		this.display();
	}

  display() {
    this.util.display().subscribe((data) => {
      if (data.status) {
        this.sList = data.list;
      }
      this.msg = data.message;
    });
  }
}
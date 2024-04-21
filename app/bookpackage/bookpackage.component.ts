import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form-related modules
import { BookingserviceService } from '../bookingservice.service';
import { Router } from '@angular/router';
import { PhoneValidateDirective } from '../phone-validate.directive';

import { NgModule } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
@Component({
  selector: 'app-bookpackage',
  templateUrl: './bookpackage.component.html',
  styleUrls: ['./bookpackage.component.css']
})
export class BookpackageComponent implements OnInit {
  email: any;
  msg:any;
  user: string|null= '';
  bookingDetails: any;
  bookingForm: FormGroup; // Declare the form group
  username:string|null='';
  Imagepath:string="../assets/images/Jd-logos.jpeg";
  remove():void{
    if(this.user!=null)
      localStorage.removeItem('user');
      this.user=null;
      this.router.navigate(['/home']);
  }
  constructor(private bookingService: BookingserviceService, private formBuilder: FormBuilder,private router:Router,private util: NodeUtilityService,) {
    this.bookingForm = this.formBuilder.group({ // Initialize the form group
      packageName: ['', Validators.required],
      packageType: ['', Validators.required],
      numberOfPersons: ['', Validators.required],
      selectedSlot: ['', Validators.required],
      totalPrice: ['', Validators.required] // Assuming totalPrice is part of the form
      
    });
  }

  ngOnInit(): void {
    this.bookingService.getBookingDetails().subscribe((details: any) => {
      this.bookingDetails = details;
      if (!this.bookingDetails) {
        console.log('No booking details found.');
      }
    });
    this.user = localStorage.getItem('user');
    if (!this.user) {
      this.router.navigateByUrl('/login');
    }
    if (this.user) 
      {
        const atIndex = this.user.indexOf('@'); // Find the index of '@' symbol
        if (atIndex !== -1) 
        {
          this.username = this.user.substring(0, atIndex); // Extract the substring before '@'
          console.log(this.username); // This will log the extracted username
        }
      }
  
  }
  confirmBooking() {
    if(this.user!=null){
      this.util.insert2(this.user,this.bookingDetails.packageName,this.bookingDetails.packageType, this.bookingDetails.numberOfPersons, this.bookingDetails.selectedSlot, this.bookingDetails.totalPrice)
        .subscribe((data) => {
          if (data.status) {
            console.log("Booking inserted successfully");
            this.msg = data.message;
            alert("insert success");
          }
        });
      }
    }
  
  cancelBooking() {
    this.bookingService.clearBookingDetails();
    this.router.navigate(['/home'])
    this.bookingForm.reset(); // Reset the form
  }
}
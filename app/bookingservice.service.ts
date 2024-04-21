import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

  public bookingDetails: any = null;
  public bookingDetailsSubject = new BehaviorSubject<any>(null);

  constructor() {
    // Load booking details from local storage when the service is instantiated
    this.loadBookingDetails();
  }

  getBookingDetails() {
    return this.bookingDetailsSubject.asObservable();
  }

  // Method to save booking details to local storage
  private saveBookingDetails() {
    localStorage.setItem('bookingDetails', JSON.stringify(this.bookingDetails));
  }

  // Method to load booking details from local storage
  private loadBookingDetails() {
    const savedBookingDetails = localStorage.getItem('bookingDetails');
    if (savedBookingDetails) {
      this.bookingDetails = JSON.parse(savedBookingDetails);
      this.bookingDetailsSubject.next(this.bookingDetails);
    }
  }

  // Method to clear booking details from local storage and reset
  clearBookingDetails() {
    localStorage.removeItem('bookingDetails');
    this.bookingDetails = null;
    this.bookingDetailsSubject.next(this.bookingDetails);
  }

  // Method to set booking details
  setBookingDetails(details: any) {
    this.bookingDetails = details;
    this.bookingDetailsSubject.next(this.bookingDetails);
    // Save booking details to local storage after updating
    this.saveBookingDetails();
  }
}
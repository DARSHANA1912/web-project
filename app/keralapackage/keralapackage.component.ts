import { Component } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-keralapackage',
  templateUrl: './keralapackage.component.html',
  styleUrl: './keralapackage.component.css'
})
export class KeralapackageComponent {
  availableSlots: string[] = []; // Array to store available slots
  selectedSlot: string = ''; // Variable to store the selected slot
  selectedPackageType: string = 'standard'; // Default package type
  selectedNumberOfPersons: any;
  numberOfPersonsOptions: number[] = [1, 2, 3, 4, 5,6,7,8,9];
  basicPrice:number=1000;
  totalPrice:number=0;
  availableSlots1: string[] = []; // Array to store available slots
  selectedSlot1: string = ''; // Variable to store the selected slot
  selectedPackageType1: string = 'standard'; // Default package type
  selectedNumberOfPersons1: any;
  numberOfPersonsOptions1: number[] = [1, 2, 3, 4, 5,6,7,8,9];
  basicPrice1:number=1000;
  totalPrice1:number=0;
  availableSlots2: string[] = []; // Array to store available slots
  selectedSlot2: string = ''; // Variable to store the selected slot
  selectedPackageType2: string = 'standard'; // Default package type
  selectedNumberOfPersons2: any;
  numberOfPersonsOptions2: number[] = [1, 2, 3, 4, 5,6,7,8,9];
  basicPrice2:number=1000;
  totalPrice2:number=0;
  Imagepath:string="../assets/images/Jd-logos.jpeg";
  constructor(private bookingService: BookingserviceService,private router:Router) { }
  user: string | null = '';
  username:string|null='';
  
  remove():void{
    if(this.user!=null)
      localStorage.removeItem('user');
      this.router.navigateByUrl('/home');
  }
  ngOnInit(): void {
    const bookingDetails = this.bookingService.getBookingDetails();
    this.calculateAvailableSlots();
    this.calculateAvailableSlots1();
    this.calculateAvailableSlots2();
    // Calculate available slots starting from next day or two days later
    this.user = localStorage.getItem('user');
    if(this.user==null)
    {
      this.router.navigateByUrl('/home');
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
  selectPackageType(packageType: string): void {
    this.selectedPackageType = packageType;
  }
  selectPackageType1(packageType: string): void {
    this.selectedPackageType1 = packageType;
  }
  selectPackageType2(packageType: string): void {
    this.selectedPackageType2 = packageType;
  }
  calculateAvailableSlots(): void {
    // Get the current date
    const currentDate = new Date();
    // Get the next day
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    // Get the date after two days
    const afterTwoDays = new Date(currentDate);
    afterTwoDays.setDate(afterTwoDays.getDate() + 2);

    // Format dates in a suitable way (e.g., 'YYYY-MM-DD')
    const formattedNextDay = this.formatDate(nextDay);
    const formattedAfterTwoDays = this.formatDate(afterTwoDays);

    // Push available slots (dates) into the array
    this.availableSlots.push(formattedNextDay);
    this.availableSlots.push(formattedAfterTwoDays);
    // You can add more slots here according to your logic
  }
  calculateAvailableSlots1(): void {
    // Get the current date
    const currentDate = new Date();
    // Get the next day
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 2);
    // Get the date after two days
    const afterTwoDays = new Date(currentDate);
    afterTwoDays.setDate(afterTwoDays.getDate() +4);
    const after4Days = new Date(currentDate);
    afterTwoDays.setDate(afterTwoDays.getDate() +6);

    // Format dates in a suitable way (e.g., 'YYYY-MM-DD')
    const formattedNextDay = this.formatDate(nextDay);
    const formattedAfterTwoDays = this.formatDate(afterTwoDays);
    const formatted4TwoDays = this.formatDate(after4Days);
    // Push available slots (dates) into the array
    this.availableSlots1.push(formattedNextDay);
    this.availableSlots1.push(formattedAfterTwoDays);
    this.availableSlots1.push(formatted4TwoDays);
    // You can add more slots here according to your logic
  }
  calculateAvailableSlots2(): void {
    // Get the current date
    const currentDate = new Date();
    // Get the next day
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    // Get the date after two days
    const afterTwoDays = new Date(currentDate);
    afterTwoDays.setDate(afterTwoDays.getDate() + 2);

    // Format dates in a suitable way (e.g., 'YYYY-MM-DD')
    const formattedNextDay = this.formatDate(nextDay);
    const formattedAfterTwoDays = this.formatDate(afterTwoDays);

    // Push available slots (dates) into the array
    this.availableSlots2.push(formattedNextDay);
    this.availableSlots2.push(formattedAfterTwoDays);
    // You can add more slots here according to your logic
  }

  formatDate(date: Date): string {
    // Format the date as 'YYYY-MM-DD'
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  selectSlot(slot: string): void {
    // Implement your logic when a slot is selected
    console.log('Selected slot:', slot);
    // You can perform further actions based on the selected slot
  }
  selectSlot1(slot: string): void {
    // Implement your logic when a slot is selected
    console.log('Selected slot:', slot);
    // You can perform further actions based on the selected slot
  }
  selectSlot2(slot: string): void {
    // Implement your logic when a slot is selected
    console.log('Selected slot:', slot);
    // You can perform further actions based on the selected slot
  }
  selectNumberOfPersons(event: Event): void {
    const target = event.target as HTMLSelectElement; // Cast event.target to HTMLSelectElement
    const numberOfPersons = parseInt(target.value, 10); // Parse the value to an integer
    this.selectedNumberOfPersons = numberOfPersons;
  }
  selectNumberOfPersons1(event: Event): void {
    const target = event.target as HTMLSelectElement; // Cast event.target to HTMLSelectElement
    const numberOfPersons1 = parseInt(target.value, 10); // Parse the value to an integer
    this.selectedNumberOfPersons1= numberOfPersons1;
  }
  selectNumberOfPersons2(event: Event): void {
    const target = event.target as HTMLSelectElement; // Cast event.target to HTMLSelectElement
    const numberOfPersons2 = parseInt(target.value, 10); // Parse the value to an integer
    this.selectedNumberOfPersons2= numberOfPersons2;
  }
  
  calculatePrice(): number {
    this.totalPrice= this.selectedNumberOfPersons*1000; // Initialize with basic price multiplied by number of persons

    // Adjust price based on the selected package type
    if (this.selectedPackageType == 'platinum') {
      this.totalPrice += 2000 * this.selectedNumberOfPersons; // Add extra 2000 for platinum package
    } else if (this.selectedPackageType == 'gold') {
      this.totalPrice += 1000 * this.selectedNumberOfPersons; // Add extra 1000 for gold package
    }


    return this.totalPrice;
  }
  calculatePrice1(): number {
    this.totalPrice1= this.selectedNumberOfPersons1*2000; // Initialize with basic price multiplied by number of persons

    // Adjust price based on the selected package type
    if (this.selectedPackageType1 == 'platinum') {
      this.totalPrice1 += 3000 * this.selectedNumberOfPersons1; // Add extra 2000 for platinum package
    } else if (this.selectedPackageType1 == 'gold') {
      this.totalPrice1 += 2000 * this.selectedNumberOfPersons1; // Add extra 1000 for gold package
    }


    return this.totalPrice1;
  }
  calculatePrice2(): number {
    this.totalPrice2= this.selectedNumberOfPersons2*2000; // Initialize with basic price multiplied by number of persons

    // Adjust price based on the selected package type
    if (this.selectedPackageType2 == 'platinum') {
      this.totalPrice2 += 3000 * this.selectedNumberOfPersons2; // Add extra 2000 for platinum package
    } else if (this.selectedPackageType2 == 'gold') {
      this.totalPrice2 += 2000 * this.selectedNumberOfPersons2; // Add extra 1000 for gold package
    }


    return this.totalPrice2;
  }

    bookNow(): void {
      const bookingDetails = {
        packageName:'Alleppey',
        packageType: this.selectedPackageType,
        numberOfPersons: this.selectedNumberOfPersons,
        selectedSlot: this.selectedSlot ,// Add this line
        totalPrice: this.calculatePrice()
      };
    
      this.bookingService.setBookingDetails(bookingDetails);
    }
    bookNow1(): void {
      const bookingDetails = {
        packageName:'Vagamon',
        packageType: this.selectedPackageType1,
        numberOfPersons: this.selectedNumberOfPersons1,
        selectedSlot: this.selectedSlot1 ,// Add this line
        totalPrice: this.calculatePrice1()
      };
    
      this.bookingService.setBookingDetails(bookingDetails);
    }
    bookNow2(): void {
      const bookingDetails = {
        packageName:'Varkala',
        packageType: this.selectedPackageType2,
        numberOfPersons: this.selectedNumberOfPersons2,
        selectedSlot: this.selectedSlot2 ,// Add this line
        totalPrice: this.calculatePrice2()
      };
    
      this.bookingService.setBookingDetails(bookingDetails);
    }
  
}
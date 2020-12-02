import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Booking } from '../booking';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit {
booking = new Booking();
selectedMaintenanceId = '';
selectChangeHandler (event: any){
  this.selectedMaintenanceId = event.target.value;
}

  constructor(private route: Router, private service: NgserviceService) { }

  ngOnInit(): void {
  }

  createbookingformsubmit(){
    this.service.createBookingToRemote(this.booking).subscribe(
      data =>{
        console.log("data added successfully");
        this.route.navigate(['/viewbookings']);
      },
      error => console.log()
    );
  }
  // goToCreateBooking(){
    // this.route.navigate(['/viewbookings']);
  // }

}

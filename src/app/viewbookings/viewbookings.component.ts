import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import { Booking } from '../booking';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.css']
})
export class ViewbookingsComponent implements OnInit {

  bookinglist!: Booking[];
  constructor(private service: NgserviceService, private route: Router) { }

  ngOnInit() {
    this.service.viewBookingsFromRemote().subscribe(
      data => {
        console.log('response received');
        this.bookinglist = data;
      },
      error => console.log('exception occured')
    );
  }

  goToCreateBooking(){
    this.route.navigate(['/createbooking']);
  }


}

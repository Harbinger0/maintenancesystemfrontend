import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private http: HttpClient) { }

  viewBookingsFromRemote(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/booking/all");
  }
  createBookingToRemote(booking: Booking): Observable<any>{
    return this.http.post<any>("http://localhost:8080/booking/create", booking);
  }
}

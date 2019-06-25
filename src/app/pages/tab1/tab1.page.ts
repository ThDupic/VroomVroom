import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../../models/trip';
import { TripsService } from '../../services/trips/trips.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  title = 'Mes trajets';
  trips: Observable<Trip[]>;

  constructor(private router: Router, private authService: AuthenticationService, private tripsService: TripsService) { }

  ngOnInit() {
    const userId = this.authService.getUserDetails().uid;
    this.trips = this.tripsService.getUserTrips(userId);
  }

  getTripDetail(trip: Trip) {
    if (!trip.id) {
      return;
    }

    this.router.navigateByUrl('trip/' + trip.id);
  }

  openAddTripModal() {
    this.router.navigateByUrl('add');
  }
}

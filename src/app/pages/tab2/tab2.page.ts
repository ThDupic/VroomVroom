import { Component } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TripsService } from 'src/app/services/trips/trips.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  trips: Observable<Trip[]>;

  constructor(private router: Router, private tripsService: TripsService) { }

  ngOnInit() {
    this.trips = this.tripsService.getTrips();

  }

  getTripDetail(trip: Trip) {
    if (!trip.id) {
      return;
    }

    this.router.navigateByUrl('trip/' + trip.id);
  }

}

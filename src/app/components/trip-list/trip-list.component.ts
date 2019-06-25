import { Component, OnInit, Input, Output } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
})
export class TripListComponent implements OnInit {

  @Input()
  trips: Observable<Trip[]>;

  @Output()
  tripElementClicked: EventEmitter<Trip> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  clickElement(trip: Trip) {
  this.tripElementClicked.emit(trip);
  }


}

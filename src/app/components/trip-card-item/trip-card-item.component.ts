import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-trip-card-item',
  templateUrl: './trip-card-item.component.html',
  styleUrls: ['./trip-card-item.component.scss'],
})
export class TripCardItemComponent implements OnInit {

  @Input()
  trip: Trip;

  constructor() { }

  ngOnInit() {}

}

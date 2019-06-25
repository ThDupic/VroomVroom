import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from '../../services/trips/trips.service';
import { Trip } from '../../models/trip';
import { firestore } from 'firebase';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {

  private trip: Trip;

  constructor(private tripsService: TripsService, private activatedRoute: ActivatedRoute, private authService: AuthenticationService,
    private toastService: ToastService) {
    this.trip = {
      from: 'here',
      to: 'somewhere',
      startAt: firestore.Timestamp.now(),
      endAt: firestore.Timestamp.now(),
      price: 20,
      distance: 150,
      note: 'A default trip',
      authorId: 'anId',
      participantsIds: []
    };
  }


  ngOnInit() {
    const id: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.tripsService.getTrip(id).subscribe(trip => this.trip = trip);
  }

  async reserve() {
    const userId: string = this.authService.getUserDetails().uid;

    let toastMessage = 'Your reservation has been validated.';

    if (this.trip.authorId === userId) {
      toastMessage = 'You already are the creator of this trip';
    } else if (this.trip.participantsIds.includes(userId)) {
      toastMessage = 'You already participate in this trip.';
    } else {
      this.trip.participantsIds.push(userId);
      this.tripsService.updateTrip(this.trip);
    }

    await this.toastService.presentToast(toastMessage);
  }
}

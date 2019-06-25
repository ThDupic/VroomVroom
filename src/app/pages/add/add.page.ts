import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { TripsService } from '../../services/trips/trips.service';
import { ToastService } from '../../services/toast/toast.service';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { firestore } from 'firebase';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  title = 'Nouveau trajet';
  fromField: string;
  toField: string;
  priceField: number;

  constructor(private router: Router, private authService: AuthenticationService, private tripsService: TripsService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  async addTrip() {
    this.tripsService.addTrip({
      from: this.fromField,
      to: this.toField,
      price: this.priceField,
      authorId: '4Y0uYIzqjIeKGIxjq2BViV0hsJA2',
      startAt: firestore.Timestamp.now(),
      endAt: firestore.Timestamp.now(),
      participantsIds: []
    });
    this.router.navigateByUrl('tabs');

    await this.toastService.presentToast('Trip created.');
  }
}

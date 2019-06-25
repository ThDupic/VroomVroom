import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { Observable, partition } from 'rxjs';
import { Trip } from '../../models/trip';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private trips: Observable<Trip[]>;
  private tripCollection: AngularFirestoreCollection<Trip>;

  constructor(private fireStore: AngularFirestore) {
    this.tripCollection = this.fireStore.collection<Trip>('trips');
    this.trips = this.tripCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data();
          return {
            id,
            from: data.from,
            to: data.to,
            startAt: data.startAt,
            endAt: data.endAt,
            price: data.price,
            distance: data.distance,
            note: data.note,
            authorId: data.authorId,
            participantsIds: data.participantsIds
          };
        });
      })
    );
  }

  getTrips(): Observable<Trip[]> {
    return this.trips;
  }

  getUserTrips(userId: string): Observable<Trip[]> {
    return this.trips.pipe(
      map(trips => {
        return trips.filter(trip => trip.authorId === userId || trip.participantsIds.includes(userId));
      }));
  }


  getTrip(id: string): Observable<Trip> {
    return this.tripCollection.doc<Trip>(id).valueChanges().pipe(
      take(1),
      map(trip => {
        trip.id = id;
        return trip;
      })
    );
  }

  addTrip(trip: Trip): Promise<any> {
    return this.tripCollection.add(trip);
  }

  updateTrip(trip: Trip): Promise<any> {
    return this.tripCollection.doc(trip.id).update({
      from: trip.from,
      to: trip.to,
      startAt: trip.startAt,
      endAt: trip.endAt,
      price: trip.price,
      distance: trip.distance,
      note: trip.note,
      authorId: trip.authorId,
      participantsIds: trip.participantsIds
    });
  }

  deleteTrip(trip: Trip): Promise<any> {
    return this.tripCollection.doc(trip.id).delete();
  }
}

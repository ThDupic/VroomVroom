import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fireAuth: AngularFireAuth) { }

  signUp(mail: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(mail, password);
  }

  logIn(mail: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(mail, password);
  }

  logOut(): Promise<void> {
    if (this.isAuthenticated) {
      return this.fireAuth.auth.signOut();
    }
  }

  isAuthenticated(): boolean {
    return this.fireAuth.auth.currentUser != null;
  }

  getUserDetails(): User {
    return this.fireAuth.auth.currentUser;
  }
}

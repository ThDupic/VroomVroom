import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router, private authService: AuthenticationService) { }

  logOut() {
    this.authService.logOut();
    console.log('Authenticated ? : ' + this.authService.isAuthenticated());
    this.router.navigateByUrl('login');
  }

}

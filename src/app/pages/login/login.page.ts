import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  identifiant: string;
  password: string;

  constructor(private router: Router, private authService: AuthenticationService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  logIn() {
    this.authService.logIn(this.identifiant, this.password)
      .then(() => {
        this.router.navigateByUrl('tabs');
        this.toastService.presentToast('Bienvenue !');
      })
      .catch(() => this.toastService.presentToast('Identifiant ou mot de passe incorrect...'));
  }

  redirectToRegisterPage() {
    console.log('SQUADALA ! NOUS SOMMES PARTIS');
    this.router.navigateByUrl('register');
  }

}

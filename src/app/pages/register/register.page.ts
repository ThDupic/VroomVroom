import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserService } from 'src/app/services/user/user.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  mail: string;
  password: string;
  confirmPassword: string;

  constructor(private router: Router, private authService: AuthenticationService, private userService: UserService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  signUp() {
    if (this.password !== this.confirmPassword) {
      return;
    }


    this.authService.signUp(this.mail, this.password)
      .then(async value => {
        this.userService.addUser({
          id: value.user.uid,
          username: this.mail,
        });

        // Faire en sorte qu'ici et à la connexion, cet utilisateur soit stocké dans une variable globale
        // En tant qu'utilisateur courant.
        const newUser = this.userService.getUser(value.user.uid);

        if (newUser) {
          this.router.navigateByUrl('tabs');
          await this.toastService.presentToast('Welcome');
        }
      })
      .catch(async (err) => await this.toastService.presentToast(`${err.code} - ${err.message}`)); // Error handling missing
  }

}

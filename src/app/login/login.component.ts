import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false; // Propriété pour gérer l'état d'erreur

  // Valeurs d'exemple pour la vérification
  validEmail: string = 'user@example.com';
  validPassword: string = 'password123';

  constructor(private router: Router) {}

  onSubmit() {
    if (
      this.username === this.validEmail &&
      this.password === this.validPassword
    ) {
      this.loginFailed = false; // Réinitialiser l'état d'erreur
      this.router.navigate(['/home']);
    } else {
      this.loginFailed = true; // Définir l'état d'erreur
    }
  }
}

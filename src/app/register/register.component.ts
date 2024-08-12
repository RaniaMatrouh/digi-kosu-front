import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    // Ajoutez la logique d'inscription ici
    console.log("Nom d'utilisateur:", this.username);
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);
  }
}

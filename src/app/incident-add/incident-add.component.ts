import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incident-add',
  templateUrl: './incident-add.component.html',
  styleUrls: ['./incident-add.component.css'],
})
export class IncidentAddComponent {
  incidentForm: FormGroup;
  notificationMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.incidentForm = this.fb.group({
      type: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.incidentForm.valid) {
      const newIncident = this.incidentForm.value;

      // Displaying a notification
      switch (newIncident.type) {
        case 'panne informatique':
          this.notificationMessage = 'Un e-mail a été envoyé au service informatique.';
          break;
        case 'panne technique':
          this.notificationMessage = 'Un e-mail a été envoyé au service technique.';
          break;
        case 'autre':
          this.notificationMessage = 'Un e-mail a été envoyé à tous les services.';
          break;
        default:
          this.notificationMessage = 'Erreur: type d’incident inconnu.';
      }

      // Hide notification after a few seconds
      setTimeout(() => {
        this.notificationMessage = null;
      }, 5000);

      // Optionally, redirect after submission
      // this.router.navigate(['/']);
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-incident-management',
  templateUrl: './incident-management.component.html',
  styleUrls: ['./incident-management.component.css']
})
export class IncidentManagementComponent {
  incidents = [
    { id: 1, type: 'panne informatique', description: 'Problème de connexion', date: new Date(), status: 'En cours' },
    { id: 2, type: 'panne technique', description: 'Problème de connexion', date: new Date(), status: 'traité' },
  ];

  editIncident(incidentId: number) {
    alert(`Editing incident with ID: ${incidentId}`);
  }

  deleteIncident(incidentId: number) {
    alert(`Deleting incident with ID: ${incidentId}`);
    this.incidents = this.incidents.filter(incident => incident.id !== incidentId);
  }
}

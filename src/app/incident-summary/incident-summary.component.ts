import { Component } from '@angular/core';

@Component({
  selector: 'app-incident-summary',
  templateUrl: './incident-summary.component.html',
  styleUrls: ['./incident-summary.component.css'],
})
export class IncidentSummaryComponent {
  // Exemple de données d'incidents
  incidents = [
    {
      id: 1,
      type: 'Type A',
      description: 'Incident A',
      date: '2024-07-23',
      status: 'résolu',
    },
    {
      id: 2,
      type: 'Type B',
      description: 'Incident B',
      date: '2024-07-22',
      status: 'en attente',
    },
    // Ajoutez plus d'incidents si nécessaire
  ];
}

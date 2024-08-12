import { Component } from '@angular/core';

@Component({
  selector: 'app-kosu-management',
  templateUrl: './kosu-management.component.html',
  styleUrls: ['./kosu-management.component.css']
})
export class KosuManagementComponent {
  kosus = [
    { idKosu: 1, horaire: '08:00-16:00', serieReference: 'SR1234', effectifPresent: 14, tempsNetDeTravail: 25, nok: 2, coefficient: 8, kosuEquivalent: 21.875, IdUser: 5},
    // Ajoutez d'autres kosus ici
  ];

  editKosu(kosuId: number) {
    alert(`Editing kosu with ID: ${kosuId}`);

  }

  deleteKosu(kosuId: number) {
    alert(`Deleting kosu with ID: ${kosuId}`);
    this.kosus = this.kosus.filter(user => kosuId !== kosuId);

  }
}

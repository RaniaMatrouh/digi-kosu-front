import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Kosu } from './kosu-form/kosu.model';

@Injectable({
  providedIn: 'root',
})
export class KosuService {
  private kosus: Kosu[] = [
    {
      idKosu: 1,
      horaire: '08:00',
      serieReference: 'SR001',
      effectifPresent: 10,
      tempsNetDeTravail: 8,
      nok: 2,
      coefficient: 1.5,
      kosuEquivalent: 10,
      user_id: 1,
    },
    {
      idKosu: 2,
      horaire: '09:00',
      serieReference: 'SR002',
      effectifPresent: 8,
      tempsNetDeTravail: 7,
      nok: 1,
      coefficient: 1.2,
      kosuEquivalent: 9,
      user_id: 2,
    },
    {
      idKosu: 3,
      horaire: '09:00',
      serieReference: 'SR002',
      effectifPresent: 8,
      tempsNetDeTravail: 7,
      nok: 1,
      coefficient: 1.2,
      kosuEquivalent: 9,
      user_id: 2,
    },
    {
      idKosu: 4,
      horaire: '09:00',
      serieReference: 'SR002',
      effectifPresent: 8,
      tempsNetDeTravail: 7,
      nok: 1,
      coefficient: 1.2,
      kosuEquivalent: 9,
      user_id: 2,
    },
    // Ajoutez d'autres objets Kosu ici
  ];

  getKosus(): Observable<Kosu[]> {
    return of(this.kosus);
  }
}

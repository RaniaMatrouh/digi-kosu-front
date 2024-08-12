import { Component, OnInit } from '@angular/core';
import { Kosu } from '../kosu-form/kosu.model';
import { KosuService } from '../kosu.service';

@Component({
  selector: 'app-kosu-list',
  templateUrl: './kosu-list.component.html',
  styleUrls: ['./kosu-list.component.css'],
})
export class KosuListComponent implements OnInit {
  kosus: Kosu[] = [];

  constructor(private kosuService: KosuService) {}

  ngOnInit(): void {
    this.kosuService.getKosus().subscribe((data) => {
      this.kosus = data;
    });
  }

  // Méthodes pour modifier et supprimer les Kosus
  modifier(kosu: Kosu) {
    // Implémentez la logique pour modifier un Kosu
    console.log('Modifier Kosu', kosu);
  }

  supprimer(kosu: Kosu) {
    // Implémentez la logique pour supprimer un Kosu
    console.log('Supprimer Kosu', kosu);
  }
}

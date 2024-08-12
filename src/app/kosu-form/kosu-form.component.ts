import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Kosu } from './kosu.model';

@Component({
  selector: 'app-kosu-form',
  templateUrl: './kosu-form.component.html',
  styleUrls: ['./kosu-form.component.css'],
})
export class KosuFormComponent implements OnInit {
  kosuForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.kosuForm = this.fb.group({
      horaire: ['', Validators.required],
      serieReference: ['', Validators.required],
      effectifPresent: [null, [Validators.required, Validators.min(0)]],
      tempsNetDeTravail: [null, [Validators.required, Validators.min(0)]],
      nok: [null, [Validators.required, Validators.min(0)]],
      coefficient: [null, [Validators.required, Validators.min(0)]],
      kosuEquivalent: [{ value: null, disabled: true }],
    });
  }

  ngOnInit(): void {
    // Écouter les changements dans les contrôles
    this.kosuForm.valueChanges.subscribe(() => this.calculateKosuEquivalent());
  }

  calculateKosuEquivalent() {
    const { effectifPresent, tempsNetDeTravail, nok, coefficient } =
      this.kosuForm.value;
    if (effectifPresent && tempsNetDeTravail && nok && coefficient) {
      const kosuEquivalent =
        (effectifPresent * tempsNetDeTravail) / (nok * coefficient);
      this.kosuForm.patchValue({ kosuEquivalent }, { emitEvent: false });
    }
  }

  onSubmit() {
    if (this.kosuForm.valid) {
      const newKosu: Kosu = this.kosuForm.value;
      console.log('Kosu Created: ', newKosu);
      // Ajoutez votre logique ici pour traiter le nouvel objet Kosu
    }
  }
}

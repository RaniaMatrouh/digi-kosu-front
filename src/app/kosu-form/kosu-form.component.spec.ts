import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosuFormComponent } from './kosu-form.component';

describe('KosuFormComponent', () => {
  let component: KosuFormComponent;
  let fixture: ComponentFixture<KosuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KosuFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KosuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

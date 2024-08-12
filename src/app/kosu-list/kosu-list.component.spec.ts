import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosuListComponent } from './kosu-list.component';

describe('KosuListComponent', () => {
  let component: KosuListComponent;
  let fixture: ComponentFixture<KosuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KosuListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KosuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

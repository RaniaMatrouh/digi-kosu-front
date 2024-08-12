import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosuOverviewComponent } from './kosu-overview.component';

describe('KosuOverviewComponent', () => {
  let component: KosuOverviewComponent;
  let fixture: ComponentFixture<KosuOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KosuOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KosuOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

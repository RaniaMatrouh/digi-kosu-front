import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentSummaryComponent } from './incident-summary.component';

describe('IncidentSummaryComponent', () => {
  let component: IncidentSummaryComponent;
  let fixture: ComponentFixture<IncidentSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

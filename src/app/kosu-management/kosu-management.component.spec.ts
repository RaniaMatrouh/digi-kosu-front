import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosuManagementComponent } from './kosu-management.component';

describe('KosuManagementComponent', () => {
  let component: KosuManagementComponent;
  let fixture: ComponentFixture<KosuManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KosuManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KosuManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

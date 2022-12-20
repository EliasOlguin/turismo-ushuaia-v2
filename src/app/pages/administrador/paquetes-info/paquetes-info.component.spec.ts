import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesInfoComponent } from './paquetes-info.component';

describe('PaquetesInfoComponent', () => {
  let component: PaquetesInfoComponent;
  let fixture: ComponentFixture<PaquetesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaquetesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaquetesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

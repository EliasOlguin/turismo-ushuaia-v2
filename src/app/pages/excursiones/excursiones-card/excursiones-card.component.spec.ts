import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionesCardComponent } from './excursiones-card.component';

describe('ExcursionesCardComponent', () => {
  let component: ExcursionesCardComponent;
  let fixture: ComponentFixture<ExcursionesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Potfolio } from './potfolio';

describe('Potfolio', () => {
  let component: Potfolio;
  let fixture: ComponentFixture<Potfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Potfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Potfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputDemoComponent } from './input-output-demo-component';

describe('InputOutputDemoComponent', () => {
  let component: InputOutputDemoComponent;
  let fixture: ComponentFixture<InputOutputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

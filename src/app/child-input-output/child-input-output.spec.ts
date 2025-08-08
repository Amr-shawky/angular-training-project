import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInputOutput } from './child-input-output';

describe('ChildInputOutput', () => {
  let component: ChildInputOutput;
  let fixture: ComponentFixture<ChildInputOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildInputOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildInputOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

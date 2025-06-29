import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ourproduct } from './ourproduct';

describe('Ourproduct', () => {
  let component: Ourproduct;
  let fixture: ComponentFixture<Ourproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ourproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ourproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

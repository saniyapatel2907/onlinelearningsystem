import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmcqComponent } from './addmcq.component';

describe('AddmcqComponent', () => {
  let component: AddmcqComponent;
  let fixture: ComponentFixture<AddmcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddmcqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddmcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

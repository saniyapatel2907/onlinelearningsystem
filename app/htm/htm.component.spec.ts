import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmComponent } from './htm.component';

describe('HtmComponent', () => {
  let component: HtmComponent;
  let fixture: ComponentFixture<HtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

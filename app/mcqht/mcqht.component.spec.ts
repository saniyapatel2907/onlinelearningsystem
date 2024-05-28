import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqhtComponent } from './mcqht.component';

describe('McqhtComponent', () => {
  let component: McqhtComponent;
  let fixture: ComponentFixture<McqhtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McqhtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McqhtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

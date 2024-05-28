import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqjsComponent } from './mcqjs.component';

describe('McqjsComponent', () => {
  let component: McqjsComponent;
  let fixture: ComponentFixture<McqjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McqjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McqjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

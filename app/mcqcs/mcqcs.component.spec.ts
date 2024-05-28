import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqcsComponent } from './mcqcs.component';

describe('McqcsComponent', () => {
  let component: McqcsComponent;
  let fixture: ComponentFixture<McqcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McqcsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McqcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

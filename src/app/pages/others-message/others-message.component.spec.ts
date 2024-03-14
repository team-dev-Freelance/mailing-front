import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersMessageComponent } from './others-message.component';

describe('OthersMessageComponent', () => {
  let component: OthersMessageComponent;
  let fixture: ComponentFixture<OthersMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthersMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OthersMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

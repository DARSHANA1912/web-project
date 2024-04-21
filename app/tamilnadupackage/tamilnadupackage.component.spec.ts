import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilnadupackageComponent } from './tamilnadupackage.component';

describe('TamilnadupackageComponent', () => {
  let component: TamilnadupackageComponent;
  let fixture: ComponentFixture<TamilnadupackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TamilnadupackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamilnadupackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

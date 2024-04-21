import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehpackageComponent } from './lehpackage.component';

describe('LehpackageComponent', () => {
  let component: LehpackageComponent;
  let fixture: ComponentFixture<LehpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LehpackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LehpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

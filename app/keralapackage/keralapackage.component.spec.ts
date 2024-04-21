import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeralapackageComponent } from './keralapackage.component';

describe('KeralapackageComponent', () => {
  let component: KeralapackageComponent;
  let fixture: ComponentFixture<KeralapackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeralapackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeralapackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

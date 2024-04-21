import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpackageComponent } from './bookpackage.component';

describe('BookpackageComponent', () => {
  let component: BookpackageComponent;
  let fixture: ComponentFixture<BookpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookpackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

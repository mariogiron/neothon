import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCardsComponent } from './class-cards.component';

describe('ClassCardsComponent', () => {
  let component: ClassCardsComponent;
  let fixture: ComponentFixture<ClassCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

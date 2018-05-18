import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrerComponent } from './fahrer.component';

describe('FahrerComponent', () => {
  let component: FahrerComponent;
  let fixture: ComponentFixture<FahrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

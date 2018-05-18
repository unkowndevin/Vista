import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticIndexComponent } from './diagnostic-index.component';

describe('DiagnosticIndexComponent', () => {
  let component: DiagnosticIndexComponent;
  let fixture: ComponentFixture<DiagnosticIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticChatComponent } from './diagnostic-chat.component';

describe('DiagnosticChatComponent', () => {
  let component: DiagnosticChatComponent;
  let fixture: ComponentFixture<DiagnosticChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

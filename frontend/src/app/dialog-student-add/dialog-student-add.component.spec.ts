import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStudentAddComponent } from './dialog-student-add.component';

describe('DialogStudentAddComponent', () => {
  let component: DialogStudentAddComponent;
  let fixture: ComponentFixture<DialogStudentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStudentAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogStudentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStudentEditComponent } from './dialog-student-edit.component';

describe('DialogStudentEditComponent', () => {
  let component: DialogStudentEditComponent;
  let fixture: ComponentFixture<DialogStudentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStudentEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogStudentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

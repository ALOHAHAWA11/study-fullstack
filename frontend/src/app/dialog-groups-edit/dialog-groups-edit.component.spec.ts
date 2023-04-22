import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGroupsEditComponent } from './dialog-groups-edit.component';

describe('DialogGroupsEditComponent', () => {
  let component: DialogGroupsEditComponent;
  let fixture: ComponentFixture<DialogGroupsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGroupsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogGroupsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddCourseModule} from './add-course.module';

describe('AddCourseModule', () => {
  let component: AddCourseModule;
  let fixture: ComponentFixture<AddCourseModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCourseModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

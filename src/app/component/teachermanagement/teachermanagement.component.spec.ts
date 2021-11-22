import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachermanagementComponent } from './teachermanagement.component';

describe('TeachermanagementComponent', () => {
  let component: TeachermanagementComponent;
  let fixture: ComponentFixture<TeachermanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachermanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

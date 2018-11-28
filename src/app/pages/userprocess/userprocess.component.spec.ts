import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprocessComponent } from './userprocess.component';

describe('UserprocessComponent', () => {
  let component: UserprocessComponent;
  let fixture: ComponentFixture<UserprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

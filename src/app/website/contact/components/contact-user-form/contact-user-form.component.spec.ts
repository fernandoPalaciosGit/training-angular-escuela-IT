import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUserFormComponent } from './contact-user-form.component';

describe('ContactUserFormComponent', () => {
  let component: ContactUserFormComponent;
  let fixture: ComponentFixture<ContactUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

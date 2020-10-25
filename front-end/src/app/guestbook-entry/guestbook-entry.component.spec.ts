import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';

import { GuestbookEntryComponent } from './guestbook-entry.component';

describe('GuestbookEntryComponent', () => {
  let component: GuestbookEntryComponent;
  let fixture: ComponentFixture<GuestbookEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestbookEntryComponent],
      providers: [
        {
          provide: AngularFirestore,
          useValue: {},
        },
        {
          provide: FormBuilder,
          useValue: {
            group: () => {
              return {
                invalid: false,
                dirty: false,
              };
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { EMPTY } from 'rxjs';

import { GuestbookComponent } from './guestbook.component';

describe('GuestbookComponent', () => {
  let component: GuestbookComponent;
  let fixture: ComponentFixture<GuestbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestbookComponent],
      providers: [
        {
          provide: AngularFirestore,
          useValue: {
            collection: () => {
              return {
                stateChanges: () => EMPTY,
              };
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

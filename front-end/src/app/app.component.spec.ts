import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';

import { AppComponent } from './app.component';
import { GuestbookEntryComponent } from './guestbook-entry/guestbook-entry.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { SocialsComponent } from './socials/socials.component';
import { ThreeDComponent } from './three-d/three-d.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockComponent(ThreeDComponent),
        MockComponent(SocialsComponent),
        MockComponent(GuestbookEntryComponent),
        MockComponent(GuestbookComponent),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

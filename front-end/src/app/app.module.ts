import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeDModule } from './three-d/three-d.module';
import { SocialsModule } from './socials/socials.module';
import { GuestbookEntryModule } from './guestbook-entry/guestbook-entry.module';
import { GuestbookModule } from './guestbook/guestbook.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAOGHL5dsEc4l-Abyx_HrkUIHwhJwTUWno',
      authDomain: 'dolan.bio',
      databaseURL: 'https://dolan-bio-75480.firebaseio.com',
      projectId: 'dolan-bio-75480',
      storageBucket: 'gs://dolan-bio-75480.appspot.com',
      messagingSenderId: '974686414789',
    }),
    AppRoutingModule,
    ThreeDModule,
    SocialsModule,
    GuestbookEntryModule,
    GuestbookModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

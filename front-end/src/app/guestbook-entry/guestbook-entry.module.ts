import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { GuestbookEntryComponent } from './guestbook-entry.component';

@NgModule({
  declarations: [GuestbookEntryComponent],
  imports: [CommonModule, AngularFirestoreModule],
  exports: [GuestbookEntryComponent],
})
export class GuestbookEntryModule {}

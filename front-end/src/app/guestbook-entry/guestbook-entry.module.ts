import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { GuestbookEntryComponent } from './guestbook-entry.component';

@NgModule({
  declarations: [GuestbookEntryComponent],
  imports: [CommonModule, AngularFirestoreModule, ReactiveFormsModule],
  exports: [GuestbookEntryComponent],
})
export class GuestbookEntryModule {}

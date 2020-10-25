import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { GuestbookComponent } from './guestbook.component';

@NgModule({
  declarations: [GuestbookComponent],
  imports: [CommonModule, AngularFirestoreModule],
  exports: [GuestbookComponent],
})
export class GuestbookModule {}

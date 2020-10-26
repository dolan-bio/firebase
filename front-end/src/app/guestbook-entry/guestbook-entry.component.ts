import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const largeWordValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
  const value = control.value as string;

  if (value === undefined) {
    return null;
  }

  const words = value.split(' ');

  for (const word of words) {
    if (word.length > 15) {
      return { largeWord: true };
    }
  }

  return null;
};
@Component({
  selector: 'app-guestbook-entry',
  templateUrl: './guestbook-entry.component.html',
  styleUrls: ['./guestbook-entry.component.scss'],
})
export class GuestbookEntryComponent {
  public readonly guestbookForm: FormGroup;

  constructor(private readonly firestore: AngularFirestore, formBuilder: FormBuilder) {
    this.guestbookForm = formBuilder.group({
      message: ['', Validators.compose([Validators.required, largeWordValidator])],
    });
  }

  public submit(): void {
    if (this.guestbookForm.invalid) {
      return;
    }

    this.firestore.collection('guestbook').add({
      message: this.guestbookForm.get('message').value.substring(0, 100),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    this.guestbookForm.reset();
  }
}

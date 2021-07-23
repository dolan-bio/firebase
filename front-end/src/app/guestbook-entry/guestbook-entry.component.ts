import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import firebase from 'firebase/app';
import Filter from 'bad-words';

const filter = new Filter();

const profanityValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value as string;

  if (!value) {
    return null;
  }

  if (filter.isProfane(value)) {
    return { profanity: true };
  }

  return null;
};

const largeWordValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value as string;

  if (!value) {
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

const spamValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value as string;

  if (!value) {
    return null;
  }

  const count = parseFloat(localStorage.getItem('comment-count') ?? '0');

  if (count > 10) {
    return { spam: true };
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
      message: ['', Validators.compose([Validators.required, largeWordValidator, profanityValidator, spamValidator])],
    });
  }

  public submit(): void {
    if (this.guestbookForm.invalid) {
      return;
    }

    localStorage.setItem('comment-count', (parseFloat(localStorage.getItem('comment-count') ?? '0') + 1).toString());

    this.firestore.collection('guestbook').add({
      message: this.guestbookForm.get('message').value.substring(0, 100),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    this.guestbookForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss'],
})
export class GuestbookComponent implements OnInit {
  public readonly items$: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.items$ = firestore.collection('guestbook').valueChanges();
  }

  ngOnInit(): void {}
}

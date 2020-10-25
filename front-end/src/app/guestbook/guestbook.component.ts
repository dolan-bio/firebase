import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Game } from '@dolan-bio/water-skills';
import { Observable } from 'rxjs';

interface GuestbookEntry {
  readonly message: string;
  readonly timestamp: firebase.firestore.Timestamp;
}

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss'],
})
export class GuestbookComponent implements OnInit {
  public readonly items$: Observable<DocumentChangeAction<GuestbookEntry>[]>;
  private readonly game: Game;

  constructor(firestore: AngularFirestore) {
    this.game = new Game();

    this.items$ = firestore
      .collection<GuestbookEntry>('guestbook', (ref) => ref.orderBy('timestamp', 'desc').limit(1000))
      .stateChanges(['added']);
  }

  public ngOnInit(): void {
    this.game.run('skills-container', () => {
      this.items$.subscribe((skills) => {
        for (const skill of skills) {
          this.game.setItemsArray([skill.payload.doc.data()]);
        }
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../../../../core/models/characters/character.interface';
import { loadMultipleCharacter } from '../../../../state/actions/chararacter.actions';
import { selectMultipleCharacter } from '../../../../state/selectors/character.selector';

@Component({
  selector: 'app-characters-location',
  templateUrl: './characters-location.component.html',
  styleUrls: ['./characters-location.component.scss'],
})
export class CharactersLocationComponent implements OnInit {
  characters$: Observable<any> = new Observable();
  characters: Array<Character> = [];
  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.characters$ = this.store.select(selectMultipleCharacter);
    this.characters$.subscribe((resp) => {
      this.characters = resp.characters;
    });
    const ids = this.activatedRoute.snapshot.queryParams['ids'];
    this.store.dispatch(loadMultipleCharacter({ ids }));
  }
}

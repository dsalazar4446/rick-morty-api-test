import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../core/models/app.state';
import { Info } from '../../../../core/models/common/info.interface';
import { Character } from '../../../../core/models/characters/character.interface';
import { loadListCharacters } from '../../../../state/actions/chararacter.actions';
import { selectCharacters, selectLoading } from '../../../../state/selectors/character.selector';
import { selectChange } from '../../../../state/selectors/searchbar.selector';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss'],
})
export class ListCharactersComponent implements OnInit {
  response$: Observable<any> = new Observable();
  info: Info = {};
  characters: Array<Character> = [];
  loading$: Observable<any> = new Observable();
  change$: Observable<any> = new Observable();
  initialCharacterValue: Array<Character> = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.response$ = this.store.select(selectCharacters);
    this.response$.subscribe((resp) => {
      this.info = resp.info;
      this.characters = resp.characters;
      this.initialCharacterValue = [...resp.characters];
    });
    this.loading$ = this.store.select(selectLoading);
    this.change$ = this.store.select(selectChange);
    this.change$.subscribe(resp => {
      this.filterItems(resp)
    })
    this.store.dispatch(loadListCharacters({ page: 1 }));
  }
  filterItems(value: string) {
    this.characters = [...this.initialCharacterValue]
    if (value && value.trim() != '') {
      this.characters = this.characters.filter((item) => {
          const name = item.name ? item.name :  ''
          return name.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
    }
  }

}

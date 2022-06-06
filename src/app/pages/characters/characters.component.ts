import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadListCharacters } from '../../state/actions/chararacter.actions';
import { selectLoading } from '../../state/selectors/character.selector';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

}

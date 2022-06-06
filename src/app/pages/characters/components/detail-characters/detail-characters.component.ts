import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../../../../core/models/characters/character.interface';
import { loadCharacter } from '../../../../state/actions/chararacter.actions';
import { selectCharacter } from '../../../../state/selectors/character.selector';

@Component({
  selector: 'app-detail-characters',
  templateUrl: './detail-characters.component.html',
  styleUrls: ['./detail-characters.component.scss']
})
export class DetailCharactersComponent implements OnInit {
  character$: Observable<any> = new Observable()
  character: Character = {}
  constructor(private store: Store, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    this.character$ = this.store.select(selectCharacter)
    this.character$.subscribe(resp =>  {
      this.character = resp.character
      console.log(this.character);
       console.log(resp);

    })

    this.store.dispatch(loadCharacter({id}))

  }

}

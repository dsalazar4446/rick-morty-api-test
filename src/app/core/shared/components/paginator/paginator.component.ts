import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadListCharacters } from '../../../../state/actions/chararacter.actions';
import { loadListEpisode } from '../../../../state/actions/episode.actions';
import { loadListLocation } from '../../../../state/actions/location.actions';
import { selectCharacters } from '../../../../state/selectors/character.selector';
import { selectEpisodes } from '../../../../state/selectors/episode.selector';
import { selectLocations } from '../../../../state/selectors/location.selector';
import { Info } from '../../../models/common/info.interface';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  response$: Observable<any> = new Observable();
  info: Info = {};
  constructor(private store: Store, private location: Location) {}

  ngOnInit(): void {
    this.getData()
  }

  getData() {

    const path = this.location.path();
    if (path.includes('characters')) {
      this.response$ =this.store.select(selectCharacters);
    }

    if (path.includes('episodes')) {
      this.response$ =this.store.select(selectEpisodes)
    }

    if (path.includes('locations')) {
      this.response$ =this.store.select(selectLocations)
    }
    this.response$.subscribe((resp) => {
      this.info = resp.info;
    });
  }

  changePage(e: any) {
    console.log(e);
    const page = e.pageIndex + 1;
    console.log('page',page);

    const path = this.location.path()
    if (path.includes('characters')) {
      this.store.dispatch(loadListCharacters({ page }));
    }

    if (path.includes('episodes')) {
      this.store.dispatch(loadListEpisode({ page }));
    }

    if (path.includes('locations')) {
      this.store.dispatch(loadListLocation({ page }));
    }
  }
}

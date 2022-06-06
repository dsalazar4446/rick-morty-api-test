import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Info } from '../../../../core/models/common/info.interface';
import { Episode } from '../../../../core/models/episodes/episode.interface';
import { loadListEpisode } from '../../../../state/actions/episode.actions';
import { selectEpisodes } from '../../../../state/selectors/episode.selector';
import { selectChange } from '../../../../state/selectors/searchbar.selector';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.scss'],
})
export class ListEpisodesComponent implements OnInit {
  response$: Observable<any> = new Observable();
  episodes: Array<Episode> = [];
  info: Info = {};
  change$: Observable<any> = new Observable();
  initialCharacterValue: Array<Episode> = [];
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.response$ = this.store.select(selectEpisodes);
    this.response$.subscribe((resp) => {
      this.episodes = resp.episodes;
      this.initialCharacterValue = [...resp.episodes];
      this.info = resp.info;
    });
    this.change$ = this.store.select(selectChange);
    this.change$.subscribe((resp) => {
      this.filterItems(resp);
    });
    this.store.dispatch(loadListEpisode({ page: 1 }));
  }

  detail(index: number) {
    const characters = this.episodes[index].characters;
    const ids: Array<number> = [];
    characters?.forEach((elem) => {
      const splited = elem.split('/');
      const lastCart = splited[splited.length - 1];
      ids.push(Number(lastCart));
    });
    this.router.navigate(['/episodes/detail'], {
      queryParams: { ids: ids.join(',') },
    });
  }

  filterItems(value: string) {
    this.episodes = [...this.initialCharacterValue];
    if (value && value.trim() != '') {
      this.episodes = this.episodes.filter((item) => {
        const name = item.name ? item.name : '';
        return name.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
    }
  }
}

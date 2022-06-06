import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Info } from '../../../../core/models/common/info.interface';
import { Location } from '../../../../core/models/locations/location.interface';
import { loadListLocation } from '../../../../state/actions/location.actions';
import { selectLocations } from '../../../../state/selectors/location.selector';
import { selectChange } from '../../../../state/selectors/searchbar.selector';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.scss'],
})
export class ListLocationComponent implements OnInit {
  response$: Observable<any> = new Observable();
  locations: Array<Location> = [];
  info: Info = {};
  change$: Observable<any> = new Observable();
  initialCharacterValue: Array<Location> = [];
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.response$ = this.store.select(selectLocations);
    this.response$.subscribe((resp) => {
      this.info = resp.info;
      this.locations = resp.locations;
      this.initialCharacterValue = [...resp.locations];
    });

    this.change$ = this.store.select(selectChange);
    this.change$.subscribe((resp) => {
      this.filterItems(resp);
    });
    this.store.dispatch(loadListLocation({ page: 1 }));
  }

  detail(index: number) {
    const residents = this.locations[index].residents;
    const ids: Array<number> = [];
    residents?.forEach((elem) => {
      const splited = elem.split('/');
      const lastCart = splited[splited.length - 1];
      ids.push(Number(lastCart));
    });
    this.router.navigate(['/locations/characters'], {
      queryParams: { ids: ids.join(',') },
    });
  }

  filterItems(value: string) {
    this.locations = [...this.initialCharacterValue];
    if (value && value.trim() != '') {
      this.locations = this.locations.filter((item) => {
        const name = item.name ? item.name : '';
        return name.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
    }
  }
}

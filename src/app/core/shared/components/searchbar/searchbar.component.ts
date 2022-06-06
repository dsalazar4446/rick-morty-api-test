import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeSearchbar } from '../../../../state/actions/searchbar.action';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @ViewChild('input') input: ElementRef | undefined
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  change(e: any) {
    if (this.input) {
      const value = this.input.nativeElement.value
      this.store.dispatch(changeSearchbar({value}));

    }
  }

}

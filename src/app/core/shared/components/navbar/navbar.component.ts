import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { closedMenu, openMenu } from '../../../../state/actions/menu.actions';
import { selectOpenMenu } from '../../../../state/selectors/menu.selector';
import { MenuState } from '../../../models/menu/menu.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  open$: Observable<MenuState> = new Observable();
  isOpen: boolean = false;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.open$ = this.store.select(selectOpenMenu);
    this.open$.subscribe(resp => {
      this.isOpen = resp.isOpen
    })
  }

  menuAction() {
    if (!this.isOpen) {
      this.store.dispatch(openMenu());
    } else {
      this.store.dispatch(closedMenu());
    }
  }
}

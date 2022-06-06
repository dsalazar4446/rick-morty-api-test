import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectOpenMenu } from '../../../../state/selectors/menu.selector';
import { MenuState } from '../../../models/menu/menu.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened: boolean = false
  open$: Observable<MenuState> = new Observable()
  constructor(private store: Store ) { }

  ngOnInit(): void {
   this.open$ = this.store.select(selectOpenMenu)
   this.open$.subscribe(resp => {
      this.opened = resp.isOpen
   })
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatList, MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    CharacterComponent,
    PaginatorComponent,
    SearchbarComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    CharacterComponent,
    PaginatorComponent,
    SearchbarComponent,
    MatProgressSpinner,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCardFooter,
    MatButton,
    MatToolbar,
    MatIcon,
    MatList,
    MatPaginator,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { ListEpisodesComponent } from './components/list-episodes/list-episodes.component';
import { CharactersEpisodesComponent } from './components/characters-episodes/characters-episodes.component';
import { SharedModule } from '../../core/shared/shared.module';


@NgModule({
  declarations: [
    EpisodesComponent,
    ListEpisodesComponent,
    CharactersEpisodesComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    SharedModule
  ]
})
export class EpisodesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { DetailCharactersComponent } from './components/detail-characters/detail-characters.component';
import { SharedModule } from '../../core/shared/shared.module';


@NgModule({
  declarations: [
    CharactersComponent,
    ListCharactersComponent,
    DetailCharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }

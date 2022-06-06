import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { SharedModule } from '../../core/shared/shared.module';
import { ListLocationComponent } from './components/list-location/list-location.component';
import { CharactersLocationComponent } from './components/characters-location/characters-location.component';


@NgModule({
  declarations: [
    LocationsComponent,
    ListLocationComponent,
    CharactersLocationComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    SharedModule
  ]
})
export class LocationsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersLocationComponent } from './components/characters-location/characters-location.component';
import { ListLocationComponent } from './components/list-location/list-location.component';
import { LocationsComponent } from './locations.component';

const routes: Routes = [
  {
    path:'',
    component: LocationsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ListLocationComponent,
      },
      {
        path: 'characters',
        component: CharactersLocationComponent,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }

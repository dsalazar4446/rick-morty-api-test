import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { DetailCharactersComponent } from './components/detail-characters/detail-characters.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
       {
          path: 'list',
          component: ListCharactersComponent
       },
       {
          path: 'detail',
          component: DetailCharactersComponent
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }

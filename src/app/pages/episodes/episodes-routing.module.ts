import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersEpisodesComponent } from './components/characters-episodes/characters-episodes.component';
import { ListEpisodesComponent } from './components/list-episodes/list-episodes.component';
import { EpisodesComponent } from './episodes.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ListEpisodesComponent,
      },
      {
        path: 'detail',
        component: CharactersEpisodesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }

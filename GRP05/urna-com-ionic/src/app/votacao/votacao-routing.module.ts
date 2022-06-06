import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotacaoPage } from './votacao.page';

const routes: Routes = [
  {
    path: '',
    component: VotacaoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotacaoPageRoutingModule {}

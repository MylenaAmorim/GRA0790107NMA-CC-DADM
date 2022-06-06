import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VotacaoPage } from './votacao.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VotacaoPageRoutingModule } from './votacao-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    VotacaoPageRoutingModule
  ],
  declarations: [VotacaoPage]
})
export class VotacaoPageModule {}

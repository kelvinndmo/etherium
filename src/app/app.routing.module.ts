import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BlockDetailsComponent } from './block-details/block-details.component';
import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'blocks',
        pathMatch: 'full'
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'block/:hash',
        component: BlockDetailsComponent
      },
      {
        path: 'blocks',
        component: BlocksComponent,
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockDetailsComponent } from './block-details/block-details.component';
import { AppRoutingModule } from './app.routing.module';
import { BlocksComponent } from './blocks/blocks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [AppComponent, BlockDetailsComponent, BlocksComponent, TransactionsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

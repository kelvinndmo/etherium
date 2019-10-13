import { Component, OnInit } from '@angular/core';
import { BlocksService } from '../services/blocks.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions = [];
  constructor(
    private blockService: BlocksService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.blockService.getTransactionsFromLatestBlock().subscribe(data => {
      this.spinner.hide();
      this.transactions = data;
    });
  }
}

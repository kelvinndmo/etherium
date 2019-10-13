import { Component, OnInit } from '@angular/core';
import { BlocksService } from '../services/blocks.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  loading = true;
  blocks = [];

  constructor(
    private blockService: BlocksService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setInterval(() => {
      this.blockService.getBlocks().subscribe(data => {
        this.blocks = data;
        this.spinner.hide();
      });
    }, 1000);

    this.stopLoading();

    // this.me();
  }

  stopLoading = () => {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  };
}

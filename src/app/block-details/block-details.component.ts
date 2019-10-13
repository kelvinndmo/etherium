import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlocksService } from '../services/blocks.service';

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.css']
})
export class BlockDetailsComponent implements OnInit {
  hash: string = null;
  block = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockService: BlocksService
  ) {}

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      console.log(data);
    });
    this.route.params.subscribe(par => {
      this.hash = par.hash;
    });
    this.blockService.getOneBlock(this.hash).subscribe(data => {
      this.block = data;
      console.log(this.block);
    });
  }
}

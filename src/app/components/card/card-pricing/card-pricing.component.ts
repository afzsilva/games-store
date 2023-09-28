import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input()plataforms:string="";
  @Input()tittle:string="";
  @Input()gamePrice:number=0.0;

  constructor() { }

  ngOnInit(): void {
  }

}

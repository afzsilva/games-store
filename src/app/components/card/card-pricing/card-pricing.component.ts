import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input()plataforms:string="PC";
  @Input()tittle:string="Buit now"
  @Input()price:number=500

  constructor() { }

  ngOnInit(): void {
  }

}

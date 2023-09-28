import { Component, Input, OnInit } from '@angular/core';
import { GameInfo } from 'src/app/model/game-info.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() gameInfo?:GameInfo;

  constructor() { }

  ngOnInit(): void {
  }

}

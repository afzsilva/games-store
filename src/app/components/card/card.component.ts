import { Component, Input, OnInit } from '@angular/core';
import { GameInfo } from 'src/app/model/game-info.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameInfo: GameInfo = {
    id: 0,
    name: '',
    image: '',
    platform: '',
    exclusive: false,
    price: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}

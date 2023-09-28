import { Component, OnInit } from '@angular/core';
import { GameInfo } from 'src/app/model/game-info.model';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gamesList:GameInfo[] = [];

  constructor(private service:GameListService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.service.getAllGames().subscribe(data=>{
        this.gamesList = data
      })
    },1000);

  }

}

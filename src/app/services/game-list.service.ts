import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameInfo } from '../model/game-info.model';


@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private _URL = "../../assets/db.json";

  constructor(private http:HttpClient) { }

  getAllGames():Observable<GameInfo[]>{
    return this.http.get<GameInfo[]>(this._URL);
  }

}

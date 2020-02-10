import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './app/player';

@Injectable({
  providedIn: 'root',
  
})
export class CricketService {

    private baseURL: string = 'http://localhost:3030/cricket/api'
    
  constructor(private http: HttpClient) { 
  }
  getPlayers(): any{
      console.log('entered promise')
      return this.http.get(`${this.baseURL}/players`)
  }

  getPlayer(id): any{
    return this.http.get(`${this.baseURL}/players/${id}`)
  }

  createPlayer(player: Player): any{
    console.log('entered service method of add player');
    return this.http.post(`${this.baseURL}/players`,player)
  }

  deletePlayer(id): any{
    return this.http.delete(`${this.baseURL}/players/${id}`)
  }

  updatePlayer(player) : any{
    return this.http.patch(`${this.baseURL}/players/${player.id}`,player)
  }
}
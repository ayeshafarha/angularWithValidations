import { Component, OnInit } from '@angular/core';
import { CricketService } from 'src/services';
import { Player } from '../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  constructor(private service: CricketService, private route:Router) { }

  playersList : Player[] = []
  selectedPlayer: Player
  editedPlayer: Player
  showEditor = false

  ngOnInit() {
    this.getPlayers()
  }
  
  getPlayers(){
    this.service.getPlayers().subscribe((res,err:any)=>{
        this.playersList = res.players
    })
  }

  changePlayer(id){
    this.playersList.forEach(player=>{
      if(player.id == id)
        this.selectedPlayer = player
    })
  }

  editPlayer(){
    this.editedPlayer= this.selectedPlayer
    this.selectedPlayer = null
    this.showEditor = true
  }

  updatePlayer(){
    this.service.updatePlayer(this.editedPlayer).subscribe((res,err:any)=>{
      alert("Player updated successfully")
      this.route.navigate(['../view'])
      this.getPlayers()
      this.showEditor = false
    })
  }
}

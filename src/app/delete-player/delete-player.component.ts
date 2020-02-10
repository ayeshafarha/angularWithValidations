import { Component, OnInit } from '@angular/core';
import { CricketService } from 'src/services';
import { Player } from '../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {

  playersList : Player[] = [];
  constructor(private service: CricketService, private router: Router) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(){
    this.service.getPlayers().subscribe((res,err: any)=>{
        this.playersList = res.players
    })
  }

  deletePlayer(id){
    this.service.deletePlayer(id).subscribe((res,err: any)=>{
      alert("Player has been deleted permanently.")
      this.router.navigate(['../view'])
      console.log("Player deleted successfully")
    })
  }




}

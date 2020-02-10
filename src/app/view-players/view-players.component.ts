import { Component, OnInit } from '@angular/core';
import {Player }from '../player';
import { CricketService } from 'src/services';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})
export class ViewPlayersComponent implements OnInit {

  
   players: Player[] = [];
   
  constructor(private service : CricketService) { 
  }

  ngOnInit() {
    console.log("View players mounted");
    this.getAllPlayers();
  }
 
  getAllPlayers(){
    this.service.getPlayers().subscribe((res,err: any)=>{
      console.log(res)
      this.players=res.players;
    },function(err){
      console.log(err)
    })
  }
  /*getAllPlayers(){
    this.service.getPlayers()
          .subscribe(res => { this.players = res.data; },
            err => console.log(err),
            () => console.log('Complete!')
    );
  }*/

}

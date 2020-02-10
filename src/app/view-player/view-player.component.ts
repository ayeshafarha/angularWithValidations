import { Component, OnInit } from '@angular/core';
import { CricketService } from 'src/services';
import { Player } from '../player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit {

  player: Player;
  constructor(private service : CricketService, private route: ActivatedRoute) { }

  ngOnInit() {

    console.log('entered on init method of view player')
    this.getIndivPlayer();
  }

  getIndivPlayer(){
    console.log('entered indiv player method')
    var id=+this.route.snapshot.params.id;
    console.log(id);
    
    this.service.getPlayer(id).subscribe((res,err: any)=>{
      console.log(res)
      this.player=res.player;
    },function(err){
      console.log(err)
    })
 
  }


 
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { ViewPlayersComponent } from './view-players/view-players.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddPlayerComponent
  },
  {
    path: 'update',
    component: UpdatePlayerComponent
  },
  {
    path: 'delete',
    component: DeletePlayerComponent
  },
  {
    path: 'view',
    component: ViewPlayersComponent
  },
  {
    path: 'view/:id',
    component: ViewPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

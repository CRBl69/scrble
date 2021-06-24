import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRoomComponent } from './new-room/new-room.component';
import { ScrabbleComponent } from './scrabble/scrabble.component';
import { JoinComponent } from './join/join.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: 'room/:name', component: ScrabbleComponent },
  { path: 'new', component: NewRoomComponent },
  { path: 'join/:name', component: JoinComponent },
  { path: 'rooms', component: RoomsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

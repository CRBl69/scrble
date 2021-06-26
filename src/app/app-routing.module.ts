import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalComponent } from './local/local.component';
import { HomeComponent } from './home/home.component';
import { SmartComponent } from './smart/smart.component';

const routes: Routes = [
  { path: 'room/:name', component: SmartComponent },
  { path: 'room', component: SmartComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'local/:players', component: LocalComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

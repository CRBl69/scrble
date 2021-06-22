import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrabbleComponent } from './scrabble/scrabble.component';

const routes: Routes = [
  { path: 'play/:players', component: ScrabbleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

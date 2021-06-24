import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseComponent } from './case/case.component';
import { LetterComponent } from './letter/letter.component';
import { ScrabbleComponent } from './scrabble/scrabble.component';
import { NewRoomComponent } from './new-room/new-room.component';

import { FormsModule } from '@angular/forms';
import { JoinComponent } from './join/join.component';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseComponent,
    LetterComponent,
    ScrabbleComponent,
    NewRoomComponent,
    JoinComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

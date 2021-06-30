import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseComponent } from './case/case.component';
import { LetterComponent } from './letter/letter.component';
import { ScrabbleComponent } from './scrabble/scrabble.component';
import { LocalComponent } from './local/local.component';

import { FormsModule } from '@angular/forms';
import { JoinComponent } from './join/join.component';
import { HomeComponent } from './home/home.component';
import { SmartComponent } from './smart/smart.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseComponent,
    LetterComponent,
    ScrabbleComponent,
    JoinComponent,
    LocalComponent,
    HomeComponent,
    SmartComponent
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

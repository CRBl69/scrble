import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseComponent } from './case/case.component';
import { LetterComponent } from './letter/letter.component';
import { ScrabbleComponent } from './scrabble/scrabble.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseComponent,
    LetterComponent,
    ScrabbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

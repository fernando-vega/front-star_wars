import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmComponent } from './components/shared/film/film.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CharactersService } from './services/characters.service';
import { UtilsService } from './services/utils.service';
import { FilmService } from './services/film.service';
import { CharacterComponent } from './components/shared/character/character.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    HomeComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CharactersService, UtilsService, FilmService],
  bootstrap: [AppComponent]
})

export class AppModule { }

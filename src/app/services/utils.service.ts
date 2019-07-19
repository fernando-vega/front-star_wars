import { Injectable } from '@angular/core';
import { Character } from 'app/models/character.model';
import { CharactersService } from './characters.service';

@Injectable()
export class UtilsService {

  public SESSION_STORAGE_MOVIE = "mdata";

  constructor(private character : CharactersService) { }

  saveBase64(e){
    return btoa(JSON.stringify(e));
  }

  decrypt(e){
    return atob(e);
  }

  get_session_storage(value, object = false){
    if (object) {
      return JSON.parse(this.decrypt(sessionStorage.getItem(value)));
    } 
    else {
      return this.decrypt(sessionStorage.getItem(value));
    }
  }

  set_session_storage(e, b){
    sessionStorage.setItem(e, this.saveBase64(b));
  }

  search_movie_name(movies, id):Character{
    for(var i = 0; i < movies.length; i++){
      if (movies[i].url == id) return movies[i];
    }
    return null;
  }

  addPeople(movies, url){
    this.character.addPeople(url).subscribe((character : any)=>{
      movies.push({'nombre': character.name, 'url': character.url});
      this.set_session_storage(this.SESSION_STORAGE_MOVIE, movies);
      return {'nombre': character.name, 'url': character.url};
    });
  }

}


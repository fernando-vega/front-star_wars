import { Component, OnInit } from '@angular/core';
import { FilmService } from 'app/services/film.service';
import { UtilsService } from 'app/services/utils.service';
import { Film } from 'app/models/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {

  films : Film[];

  public shouldShow = false;

  name : string;
  description : string;

  constructor(private filmService:FilmService, private utilsService: UtilsService) { 
    this.name = ' ';
    this.description = ' ';
  }

  ngOnInit() {
    this.films = [];
    this.filmService.get_films().subscribe((film : any)=>{
      let result = film.results;
      const movies = this.utilsService.get_session_storage(this.utilsService.SESSION_STORAGE_MOVIE, true);
      result.forEach(element => {
        let personajes = [];
        for(var i = 0; i < element.characters.length; i++){
          if (this.utilsService.search_movie_name(movies,element.characters[i]) != null) {
            personajes.push(this.utilsService.search_movie_name(movies,element.characters[i]));
          }
        }
        this.films.push({nombre: element.title, numero_episodio: element.episode_id, director: element.director, descripcion: element.opening_crawl, personajes:personajes});
      });
      console.log(this.films);
    })
  }


  openModal(name, description){
    this.shouldShow = true;
    this.name = name;
    this.description = description;
  }


  closeModal(){
    this.shouldShow = false;
  }

}

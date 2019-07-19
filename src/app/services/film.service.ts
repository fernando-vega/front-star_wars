import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';

@Injectable()
export class FilmService {

  constructor(private httpClient : HttpClient, private utilsService : UtilsService) { }

  get_films():any{
    return this.httpClient.get("https://swapi.co/api/films/");
  }

}

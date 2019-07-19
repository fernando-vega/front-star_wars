import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CharactersService {

  constructor(private httpClient : HttpClient) { }


  get_characters():Observable<any>{
    return this.httpClient.get("https://swapi.co/api/people/");
  }

  addPeople(url){
    return this.httpClient.get(url);
  }

}

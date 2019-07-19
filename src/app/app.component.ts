import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { UtilsService } from './services/utils.service';
import { Character } from './models/character.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  people : Character[];

  constructor(private characters:CharactersService, private utilsService: UtilsService){}

  ngOnInit() {
    this.people = [];
    this.characters.get_characters().subscribe((character : any)=>{
      let result = character.results;
      result.forEach(element => {
        this.people.push({'nombre': element.name, 'url': element.url});
      });
      this.utilsService.set_session_storage(this.utilsService.SESSION_STORAGE_MOVIE, this.people);
    });
  }

}

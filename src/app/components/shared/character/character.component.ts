import { Component, OnInit } from '@angular/core';
import { Character } from 'app/models/character.model';
import { CharactersService } from 'app/services/characters.service';
import { UtilsService } from 'app/services/utils.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters : Character[];

  constructor(private characterService:CharactersService, private utilService: UtilsService) { }

  ngOnInit() {

    this.characters = [];
    this.characterService.get_characters().subscribe((character : any)=>{
      console.log(character);
    })
  }

}

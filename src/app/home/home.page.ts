import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pokemons: any[] = [];

  constructor( private PokeService: PokeapiService) {}

  ngOnInit(){
    this.PokeService.getPokemon().subscribe( (data: any) => {
      // console.log('Lista de pokemones: ', data.results);
      // console.log(data.results);
      this.pokemons = data.results;
    });
  }

  pagePokemon( index: number){
    return console.log(index);
  }

}

import { Component } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { StorageService } from '../services/storage.service';

import { ModalController } from '@ionic/angular';
import { PokemonDetailComponent } from '../components/pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})
export class Tab3Page {

  pokemonList: any[] = [];

  constructor(
    private storageService: StorageService,
    private pokeapiService: PokeapiService,
    private modalController: ModalController,
  ) {}

  ionViewWillEnter() {
    this.loadPokemons();
  }


  async loadPokemons() {

    const storedPokemonList = await this.storageService.getAllPokemon();

    if (storedPokemonList.length > 0) {
      const promises = storedPokemonList.map((storedPokemon: any) =>
        this.pokeapiService.getPokemon(storedPokemon.id).toPromise()
      );

      const pokemonDataArray = await Promise.all(promises);
      this.pokemonList = pokemonDataArray;


    }
  }

  async openPokemonDetail(pokemon: any) {
    const modal = await this.modalController.create({
      component: PokemonDetailComponent,
      componentProps: { pokemon },
    });
    await modal.present();
  }

}
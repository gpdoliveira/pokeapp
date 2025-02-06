import { Component } from '@angular/core';

import { PokeapiService } from '../services/pokeapi.service';
import { PokemonDetailComponent } from '../components/pokemon-detail/pokemon-detail.component';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private pokeapiService: PokeapiService, private modalController: ModalController, private storageService: StorageService) {}

  async openPokemonDetail(pokemon: any){
    const modal = await this.modalController.create({
      component: PokemonDetailComponent,
      componentProps: { pokemon },
    });
    await modal.present();
  }

  async getPokemon() {
    const id = this.pokeapiService.getRandomId(1, 1010);  // Gera um ID aleatório
    this.pokeapiService.getPokemon(id).subscribe((data) => {
    //  this.pokemonData = data;
      this.addPokemon();
      this.openPokemonDetail(data);
    });
  }

  async addPokemon() {
    //await this.storageService.addPokemon(this.pokemonData.id);
  }

}

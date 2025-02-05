import { Component } from '@angular/core';

import { PokeapiService } from '../services/pokeapi.service';
import { PokemonDetailComponent } from '../components/pokemon-detail/pokemon-detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private pokeapiService: PokeapiService, private modalController: ModalController) {}

}

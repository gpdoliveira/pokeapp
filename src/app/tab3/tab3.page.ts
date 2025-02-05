import { Component } from '@angular/core';
import { PokemonDetailComponent } from '../components/pokemon-detail/pokemon-detail.component';
import { ModalController } from '@ionic/angular';
import { PokeapiService } from '../services/pokeapi.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(private pokeapiService: PokeapiService, private modalController: ModalController) {}

}

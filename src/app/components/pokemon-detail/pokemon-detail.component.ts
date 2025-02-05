import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  standalone:false
})
export class PokemonDetailComponent {
  @Input() pokemon: any;

  constructor(private modalController: ModalController,
    private router: Router) {}

closeModal() {
  const currentRoute = this.router.url;

  this.modalController.dismiss().then(() => {
    if (currentRoute === '/tabs/tab2') {
      this.router.navigate(['/tabs/tab3']);
    }
  });
}

}
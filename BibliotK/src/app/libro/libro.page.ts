import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  agregarFavoritos(){
    this.presentAlertFavoritos();
  }
  async presentAlertFavoritos() {
    const alert = await this.alertController.create({
      header: 'Libro agregado a Favoritos.',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertDeseados() {
    const alert = await this.alertController.create({
      header: 'Libro agregado a Deseados.',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }
  

  agregarDeseados(){
    this.presentAlertDeseados();
  }
}

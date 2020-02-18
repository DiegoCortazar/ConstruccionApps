import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // user: any;
  // codeV: any;
  // passwordV: any;


  constructor(private storage: Storage, public alertController: AlertController) { }
  
  //   async presentAlert(user: any) {
  //   const alert = await this.alertController.create({
  //     header: 'Usuario',
  //     subHeader: 'Datos de Usuario',
  //     message: 'El usuario: ' +   user.code + ", password: " + user.password, 
  //     buttons: ['Cerrar', 'Guardar']
  //   });

  //   await alert.present();
  // }
  
  onLogin() {
    console.log("ME ESPICHARON");
    // this.guardar();
    // this.leer();
  }

  // guardar() {
  //   this.storage.set('user', { code: this.codeV, password: this.passwordV });
  // }
  // leer() {
  //   this.storage.get('user').then((respuesta) => {
  //       console.log(respuesta);
  //       this.user = respuesta;
  //       this.presentAlert(respuesta);
  //   }).catch((error) => {
  //           console.log(error);
  //   });
  // }

  
}

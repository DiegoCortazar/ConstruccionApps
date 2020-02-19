import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(public menu: MenuController, public alertController: AlertController) { }

  ngOnInit() {
  }

  //Boton/Card de psicologia
  cardPsicologia() {
    console.log("Psicologia clicked");
    this.presentAlertPsicologia();
  }

  async presentAlertPsicologia() {
    const alert = await this.alertController.create({
      header: 'No hay libros de Psicología aún.',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertIndustrial() {
    const alert = await this.alertController.create({
      header: 'No hay libros de Industrial aún.',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertNegocios() {
    const alert = await this.alertController.create({
      header: 'No hay libros de Negocios aún.',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlertMatematicas() {
    const alert = await this.alertController.create({
      header: 'No hay libros de Matemáticas aún.',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlertMercadeo() {
    const alert = await this.alertController.create({
      header: 'No hay libros de Mercadeo aún.',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

  //Boton/Card de Sistemas
  cardSistemas() {

    console.log("Sistemas clicked");
  }

  //Boton/Card de industrial
  cardIndustrial() {
    console.log("Industrial clicked");
    this.presentAlertIndustrial();
  }

  //Boton/Card de matematicas
  cardMatematicas() {
    console.log("Metematicas clicked");
    this.presentAlertMatematicas();

  }

  //Boton/Card de mercadeo
  cardMercadeo() {
    console.log("Mercadeo clicked");
    this.presentAlertMercadeo();
  }

  //Boton/Card de negocios
  cardNegocios() {
    console.log("Negocios clicked");
    this.presentAlertNegocios();
  }

  //metodo que permite al menu lateral mostrarse
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  //Boton configuracion del menu lateral
  menuBotonConfiguracion() {
    console.log("configuracion");
  }

  async presentAlertDeseados() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Redirigiendo a Deseados',
      message: 'Aún no tienes libros Deseados.',
      buttons: ['OK']
    });

    await alert.present();
  }

  
  async presentAlertFavoritos() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Redirigiendo a Favoritos',
      message: 'Aún no tienes libros Favoritos.',
      buttons: ['OK']
    });

    await alert.present();
  }
 
 

}

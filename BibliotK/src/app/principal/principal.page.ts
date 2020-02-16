import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {
  }

  //Boton/Card de psicologia
  cardPsicologia() {
    console.log("Psicologia clicked");
  }

  //Boton/Card de Sistemas
  cardSistemas() {
    console.log("Sistemas clicked");
  }

  //Boton/Card de industrial
  cardIndustrial() {
    console.log("Industrial clicked");
  }

  //Boton/Card de matematicas
  cardMatematicas() {
    console.log("Metematicas clicked");
  }

  //Boton/Card de mercadeo
  cardMercadeo() {
    console.log("Mercadeo clicked");
  }

  //Boton/Card de negocios
  cardNegocios() {
    console.log("Negocios clicked");
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

}

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

  cardPsicologia(){
    console.log("Psicologia clicked");
  }

  cardSistemas(){
    console.log("Sistemas clicked");
  }
  cardIndustrial(){
    console.log("Industrial clicked");
  }
  cardMatematicas(){
    console.log("Metematicas clicked");
  }
  cardMercadeo(){
    console.log("Mercadeo clicked");
  }
  cardNegocios(){
    console.log("Negocios clicked");
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  menuBotonConfiguracion(){
    console.log("configuracion");
  }

}

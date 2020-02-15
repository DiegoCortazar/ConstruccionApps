import { Component, OnInit } from '@angular/core';
import { AlertController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})

export class ConfiguracionPage implements OnInit {

  constructor(public alertController: AlertController, public pickerController:PickerController) { }

  public idioma : string = "Español";
  public nombre : string = "Usuario";
  public pass : string = "12345";

  ngOnInit() {
  }

  async cambiarNombre(){
      const alert = await this.alertController.create({
        header: 'Cambiar nombre',
        inputs: [
          {
            name: 'nombre',
            type: 'text',
            value: this.nombre,
            placeholder: this.nombre
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (data) => {
              this.nombre = data.nombre;
              console.log('Confirm ' + this.nombre);
            }
          }
        ]
      });
  
      await alert.present();
    
  }

  async cambiarPassword(){
    const alert = await this.alertController.create({
      header: 'Cambiar contraseña',
      inputs: [
        {
          name: 'newPass',
          type: 'text',
          placeholder: "new password",
          min: 5,
          max: 18
        },
        {
          name: 'newPassConfirm',
          type: 'text',
          placeholder: "new password confirmed",
          min: 5,
          max: 18
        },        
        {
          name: 'oldPass',
          type: 'text',
          placeholder: "old password",
          min: 5,
          max: 18
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data.newPass + "-" + data.newPassConfirm + "-" + data.oldPass);
            if(data.newPass === data.newPassConfirm && data.oldPass === this.pass){
              this.pass = data.newPass;
              console.log("Confirmed new password: " + data.newPass);
            }else{
              this.alertError();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async alertError(){
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'La contraseña no ha sido guardada',
      buttons: ['OK']
    });

    await alert.present();
  }

  async cambiarIdioma() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'español',
          type: 'radio',
          label: 'Español',
          value: 'Español',
          checked: true
        },
        {
          name: 'english',
          type: 'radio',
          label: 'English',
          value: 'English'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.idioma = "" + data;
            console.log('Confirm ' + this.idioma);
          }
        }
      ]
    });

    await alert.present();
  }

  async openPicker(numColumns = 1, numOptions = 5, columnOptions = defaultColumnOptions){
    const picker = await this.pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(`Got Value ${value}`);
          }
        }
      ]
    });
    await picker.present();
  }

  getColumns(numColumns, numOptions, columnOptions) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }

    return columns;
  }

  getColumnOptions(columnIndex, numOptions, columnOptions) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }

    return options;
  }
}

const defaultColumnOptions = [  
  [
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ]
]
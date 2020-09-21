import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    if (this.email === '') {
      this.presentAlert('Ingese un email valido');
    } else if (this.password === '') {
      this.presentAlert('Ingrese la clave');
    } else {
      this.authService.login(this.email, this.password).then(res => {
        this.router.navigate(['/home']);
      }).catch(err => this.presentAlert('Usuario o clave incorrecta'));
    }
  }

  onLimpiar() {
    this.password = '';
    this.email = '';
  }
  async presentAlert(dato: string) {
    const alert = await this.alertController.create({
      cssClass: 'alertButton',
      header: 'Error en el Login',
      message: dato,
      buttons: ['OK']
    });
    await alert.present();
  }
}


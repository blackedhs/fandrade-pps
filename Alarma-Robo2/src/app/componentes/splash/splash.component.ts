import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {
  public imgScr: string;
  constructor(private terminar: AppComponent) { }

  ngOnInit() {
    console.log('inicie');
    this.imgScr = '../../../assets/imagenes/Alarma0.png';
    this.animacion();
  }
  async animacion() {
    for (let index = 1; index < 7; index++) {
      this.CambiarImagen(index);
      await this.delay(500);
    }
    for (let index = 5; index > 0; index--) {
      this.CambiarImagen(index);
      await this.delay(500);
    }
    this.terminar.mostrarSplash = false;
  }
  CambiarImagen(posicion: number) {
    this.imgScr = '../../../assets/imagenes/Alarma' + posicion + '.png';
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

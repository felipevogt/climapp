import { ViewChild, Component, OnInit, Renderer2, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { IonRow } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

	@ViewChildren(IonRow,  {read: ElementRef}) rows: QueryList<any>;

  public activeRow : any;
  public temperature : any;

  constructor(private renderer: Renderer2, private el: ElementRef) { 

  }

  ionViewWillEnter() {
    this.temperature = this.RandomNum();
    this.selectRow(this.selectTemperatureRange(this.temperature));
  }

  selectRow(number){
    this.activeRow = this.rows.toArray()[number].nativeElement;
    this.renderer.removeClass(this.activeRow, "defaultSize");
    this.renderer.addClass(this.activeRow, "activeRow");
    this.addContent(this.activeRow);
  }

  addContent(row){
    const time = this.renderer.createElement('ion-col');
    const value = this.renderer.createText(this.temperature + "°C");
    this.renderer.addClass(time, "tiempo");
    this.renderer.appendChild(time, value);


    const icon = this.renderer.createElement('ion-col');
    const rute = this.renderer.createElement('ion-img');
    this.renderer.setAttribute(rute, "src", "assets/icon/10n.png");
    this.renderer.addClass(rute, "icono");
    this.renderer.appendChild(icon, rute);




    this.renderer.appendChild(row, time);
    this.renderer.appendChild(row, icon);
  }

  selectTemperatureRange(number){
    switch (true) {
      case (number >= 51):
      return 0;
      break;
      case (number >= 45 && number < 51):
      return 1;
      break;
      case (number >= 39 && number < 45):
      return 2;
      break;
      case (number >= 33 && number < 39):
      return 3;
      break;
      case (number >= 27 && number < 33):
      return 4;
      break;
      case (number >= 21 && number < 27):
      return 5;
      break;
      case (number >= 15 && number < 21):
      return 6;
      break;
      case (number >= 9 && number < 15):
      return 7;
      break;
      case (number >= 3 && number < 9):
      return 8;
      break;
      case (number >= -3 && number < 3):
      return 9;
      break;
      case (number >= -9 && number < -3):
      return 10;
      break;
      case (number >= -15 && number < -9):
      return 11;
      break;
      case (number >= -21 && number < -15):
      return 12;
      break;
      case (number >= -27 && number < -21):
      return 13;
      break;
      case (number >= -33 && number < -27):
      return 14;
      break;
      case (number >= -39 && number < -33):
      return 15;
      break;
      case (number >= -45 && number < -39):
      return 16;
      break;
      case (number < -45):
      return 17;
      break;
    }
  }

  RandomNum() {
    return Math.floor(Math.random() * (60 - (-60) + 1)) + (-60);

  }

  

}
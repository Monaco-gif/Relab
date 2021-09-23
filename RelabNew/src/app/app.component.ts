import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  label :string;
  circleOptions: { fillColor: string; };
  circleOptions2: { fillColor: string; };
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "Sei Qui";
    this.circleOptions = {fillColor : 'red'}
    this.circleOptions2 = {fillColor : 'blue'}
  }

  yellow(){
    this.circleOptions = {fillColor : 'yellow'}
  }
  black(){
    this.circleOptions = {fillColor : 'black'}
  }
  green(){
    this.circleOptions = {fillColor : 'green'}
  }

  pink(){
    this.circleOptions2 = {fillColor : 'pink'}
  }
  purple(){
    this.circleOptions2 = {fillColor : 'purple'}
  }
  orange(){
    this.circleOptions2 = {fillColor : 'orange'}
  }
}

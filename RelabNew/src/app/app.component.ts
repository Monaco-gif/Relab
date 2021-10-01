import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  markerOptions: google.maps.MarkerOptions;
  markerOptions2: google.maps.MarkerOptions;
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  label :string;
  circleOptions: { fillColor: string; };
  circleOptions2: { fillColor: string; };
  position2: { lat: number; lng: number; };
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.position2 = {lat: 45.507338, lng: 9.190766};
    this.label = "Sei Qui";
    this.circleOptions = {fillColor : 'red'}
    this.circleOptions2 = {fillColor : 'blue'}

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
    this.markerOptions = {icon:iconData}

    let iconData2 : google.maps.Icon = {
      url:'./assets/img/acquila.jpg',
      scaledSize : new google.maps.Size(60,60)
    }
    this.markerOptions2 = {icon:iconData2}
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


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  lat: number = 45.506738;  
  lng: number = 9.190766;
  //latitudine e longitudine casa mia
  lat: number = 45.5358497;
  lng: number = 9.1874208;
}
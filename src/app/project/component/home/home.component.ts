import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  standalone: true, // Marks it as standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, GoogleMapsModule, ], // Imports necessary modules
})
export class HomeComponent implements OnInit {

    center: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.0060 }; // New York
    zoom = 12;

  constructor() { }

  ngOnInit(): void {
    
  }

}

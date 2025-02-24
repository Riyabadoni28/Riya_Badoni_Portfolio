import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

declare const google: any;

@Component({
    selector: 'app-nav',
    standalone: true, // Marks it as standalone
    imports: [CommonModule,GoogleMapsModule], // Imports necessary modules
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})


export class NavComponent {

    center = { lat: 40.7128, lng: -74.0060 }; // New York
    zoom = 12;
}

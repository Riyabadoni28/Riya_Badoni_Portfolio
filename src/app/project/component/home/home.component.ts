import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true, // Marks it as standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, ], // Imports necessary modules
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

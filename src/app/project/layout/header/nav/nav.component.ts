import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

declare const google: any;

@Component({
    selector: 'app-nav',
    standalone: true, // Marks it as standalone
    imports: [CommonModule, RouterModule], // Imports necessary modules
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})


export class NavComponent {

    likeCount: number = 0;

    clickLike() {
        this.likeCount++;
    }
}



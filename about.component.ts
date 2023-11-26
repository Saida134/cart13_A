import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css'],  // Use styleUrls for multiple style files
})
export class AboutComponent {
  constructor(private router: Router) {}


  // Add component properties and methods here
}
  //standalone: true,
  //imports: [CommonModule],


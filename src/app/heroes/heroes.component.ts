import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here for standalone components
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here for standalone components
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}

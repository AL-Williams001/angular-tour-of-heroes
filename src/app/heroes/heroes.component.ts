import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here for standalone components
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor], // Add FormsModule here for standalone components
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

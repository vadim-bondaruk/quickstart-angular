import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HeroService} from './hero.service'

import { Hero } from './hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit{

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService : HeroService,
              private router : Router){}

  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

  getHeroes() : void{
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}

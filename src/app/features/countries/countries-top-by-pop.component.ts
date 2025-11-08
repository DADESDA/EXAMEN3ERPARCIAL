import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { CountriesListComponent } from './countries-list.component';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-countries-top-pop',
  standalone: true,
  imports: [CommonModule, FormsModule, CountriesListComponent],
  template: `
  <form (ngSubmit)="search()" class="bar">
    <label>Cantidad</label>
    <input type="number" min="1" max="50" [(ngModel)]="n" name="n" required>
    <button type="submit">Top por población</button>
  </form>

  <div class="help">
    <h4>Ranking por población</h4>
    <p>Devuelve los <code>N</code> países con mayor población a partir de todos los países.</p>
  </div>

  <app-countries-list [countries]="res"></app-countries-list>
  `,
  styles: [`
    .bar{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}
    input, button{padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.5rem}
    button{cursor:pointer}
  `]
})
export class CountriesTopByPopulationComponent{
  n = 10;
  res: Country[] = [];
  constructor(private api: CountriesService){}
  search(){ this.api.listTopByPopulation(this.n).subscribe(d=> this.res = d); }
}

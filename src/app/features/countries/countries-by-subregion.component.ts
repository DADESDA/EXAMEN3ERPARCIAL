import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { CountriesListComponent } from './countries-list.component';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-countries-by-subregion',
  standalone: true,
  imports: [CommonModule, FormsModule, CountriesListComponent],
  template: `
  <form (ngSubmit)="search()" class="bar">
    <select [(ngModel)]="term" name="term" required>
      <option disabled selected value="">Seleccionar subregión...</option>
      <option>South America</option>
      <option>North America</option>
      <option>Caribbean</option>
      <option>Western Europe</option>
      <option>Eastern Europe</option>
      <option>Southern Europe</option>
      <option>Northern Africa</option>
      <option>Sub-Saharan Africa</option>
      <option>South-Eastern Asia</option>
      <option>Western Asia</option>
      <option>Eastern Asia</option>
      <option>Central Asia</option>
      <option>Australia and New Zealand</option>
      <option>Melanesia</option>
      <option>Polynesia</option>
    </select><button type="submit">Buscar subregión</button>
  </form>

  <div class="help">
    <h4>¿Qué es una subregión?</h4>
    <p>Una subregión agrupa países dentro de una región. Ejemplos: <code>South America</code> (Americas), <code>Western Europe</code> (Europe).</p>
  </div>

  <app-countries-list [countries]="res"></app-countries-list>
  `,
  styles: [`
    .bar{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}
    input, select, button{padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.5rem}
    button{cursor:pointer}
  `]
})
export class CountriesBySubregionComponent{
  term = '';
  res: Country[] = [];
  constructor(private api: CountriesService){}
  search(){ if(!this.term) return; this.api.bySubregion(this.term.trim()).subscribe(d=> this.res = d); }
}

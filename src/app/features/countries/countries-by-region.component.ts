import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { CountriesListComponent } from './countries-list.component';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-countries-by-region',
  standalone: true,
  imports: [CommonModule, FormsModule, CountriesListComponent],
  template: `
  <form (ngSubmit)="search()" class="bar">
    <select [(ngModel)]="term" name="term" required><option value="" disabled selected>Elegir región</option><option>Africa</option><option>Americas</option><option>Asia</option><option>Europe</option><option>Oceania</option></select><button type="submit">Buscar</button>
  </form>

  <div class="help">
    <h4>¿Qué regiones existen?</h4>
    <p>Usa una de estas opciones: <code>Africa</code>, <code>Americas</code>, <code>Asia</code>, <code>Europe</code>, <code>Oceania</code>.</p>
  </div>

  <app-countries-list [countries]="res"></app-countries-list>
  `,
  styles: [`
    .bar{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}
    input, select, button{padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.5rem}
    button{cursor:pointer}
  `]
})
export class CountriesByRegionComponent{
  term = '';
  res: Country[] = [];
  constructor(private api: CountriesService){}
  search(){ if(!this.term) return; this.api.byRegion(this.term).subscribe(d=> this.res = d); }
}

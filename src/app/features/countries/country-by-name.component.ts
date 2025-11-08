import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { CountriesListComponent } from './countries-list.component';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-by-name',
  standalone: true,
  imports: [CommonModule, FormsModule, CountriesListComponent],
  template: `
  <form (ngSubmit)="search()" class="bar">
    <input [(ngModel)]="term" name="term" placeholder="Ej: Bolivia" required><button type="submit">Buscar por nombre</button>
  </form>

  <div class="help">
    <h4>Buscar por nombre</h4>
    <p>Puedes ingresar nombres completos o parciales. Ej.: <code>bolivia</code>, <code>arg</code> devolverá países coincidentes.</p>
  </div>

  <app-countries-list [countries]="res"></app-countries-list>
  `,
  styles: [`
    .bar{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}
    input, select, button{padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.5rem}
    button{cursor:pointer}
  `]
})
export class CountryByNameComponent{
  term = '';
  res: Country[] = [];
  constructor(private api: CountriesService){}
  search(){ if(!this.term) return; this.api.byName(this.term.trim()).subscribe(d=> this.res = d); }
}

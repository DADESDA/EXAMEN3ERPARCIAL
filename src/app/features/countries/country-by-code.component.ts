import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { CountriesListComponent } from './countries-list.component';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-by-code',
  standalone: true,
  imports: [CommonModule, FormsModule, CountriesListComponent],
  template: `
  <form (ngSubmit)="search()" class="bar">
    <input [(ngModel)]="term" name="term" placeholder="Ej: BOL o BO" required><button type="submit">Buscar código</button>
  </form>

  <div class="help">
    <h4>Código de país</h4>
    <p>Acepta <b>alpha-2</b> (2 letras) o <b>alpha-3</b> (3 letras). Ej.: <code>BO</code> o <code>BOL</code>, <code>US</code> o <code>USA</code>.</p>
  </div>

  <app-countries-list [countries]="res"></app-countries-list>
  `,
  styles: [`
    .bar{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}
    input, select, button{padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.5rem}
    button{cursor:pointer}
  `]
})
export class CountryByCodeComponent{
  term = '';
  res: Country[] = [];
  constructor(private api: CountriesService){}
  search(){ if(!this.term) return; this.api.byCode(this.term.trim()).subscribe(d=> this.res = d); }
}

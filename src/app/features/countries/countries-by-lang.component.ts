import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { CountriesListComponent } from './countries-list.component';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-countries-by-lang',
  standalone: true,
  imports: [CommonModule, FormsModule, CountriesListComponent],
  template: `
  <form (ngSubmit)="search()" class="bar">
    <input [(ngModel)]="term" name="term" placeholder="Ej: english, spanish, french" required><button type="submit">Buscar idioma</button>
  </form>

  <div class="help">
    <h4>Idioma en inglés</h4>
    <p>Escribe el nombre del idioma en inglés tal como en la API. Ej.: <code>english</code>, <code>spanish</code>, <code>french</code>.</p>
  </div>

  <app-countries-list [countries]="res"></app-countries-list>
  `,
  styles: [`
    .bar{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}
    input, select, button{padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.5rem}
    button{cursor:pointer}
  `]
})
export class CountriesByLangComponent{
  term = '';
  res: Country[] = [];
  constructor(private api: CountriesService){}
  search(){ if(!this.term) return; this.api.byLang(this.term.trim()).subscribe(d=> this.res = d); }
}

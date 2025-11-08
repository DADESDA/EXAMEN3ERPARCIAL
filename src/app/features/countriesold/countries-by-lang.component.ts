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
    <label>Idioma (en inglés)</label>
    <input [(ngModel)]="term" name="term" placeholder="Ej: english, spanish, french" required>
    <button type="submit">Buscar</button>
  </form>

  <div class="help">
    <h4>¿Cómo buscar idiomas?</h4>
    <p>Debes escribir el idioma en inglés, tal como aparece en los datos de la API.  
    Ejemplos válidos: <code>english</code>, <code>spanish</code>, <code>french</code>.</p>
  </div>

  <app-countries-list [countries]="res"></app-countries-list>
  `,
})
export class CountriesByLangComponent {
  term = '';
  res: Country[] = [];
  constructor(private api: CountriesService) {}
  search() {
    if (!this.term) return;
    this.api.byLanguage(this.term.trim()).subscribe(d => this.res = d);
  }
}

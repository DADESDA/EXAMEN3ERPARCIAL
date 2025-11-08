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
    <label>Región</label>
    <select [(ngModel)]="term" name="term" required>
      <option disabled selected value="">Seleccionar región...</option>
      <option>Africa</option>
      <option>Americas</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
    <button type="submit">Buscar</button>
  </form>

  <div class="help">
    <h4>¿Qué regiones existen?</h4>
    <p>Las regiones corresponden a los grandes continentes o áreas geográficas definidas por la API.  
    Ejemplo: <code>Americas</code> mostrará países del norte, centro y sur de América.</p>
  </div>

  <app-countries-list [countries]="res"></app-countries-list>
  `,
})
export class CountriesByRegionComponent {
  term = '';
  res: Country[] = [];
  constructor(private api: CountriesService) {}
  search() {
    if (!this.term) return;
    this.api.byRegion(this.term).subscribe(d => this.res = d);
  }
}

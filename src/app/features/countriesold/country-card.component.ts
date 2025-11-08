import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '../../models/country.model';
import { JsonToListPipe } from '../shared/json-to-list.pipe';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [CommonModule, JsonToListPipe],
  template: `
  <article class="card">
    <img class="media" [src]="country?.flags?.png" [alt]="country?.flags?.alt || 'Bandera'">
    <div class="content">
      <h4>{{ country?.name?.common || '-' }}</h4>
      <p class="small">Capital: {{ country?.capital?.[0] || '-' }}</p>
      <p class="small">Región: {{ country?.region || '-' }} · Subregión: {{ country?.subregion || '-' }}</p>
      <p class="small">Población: {{ country?.population | number }}</p>
      <p class="small">Idiomas: {{ country?.languages | jsonToList:'languages' }}</p>
      <p class="small">Monedas: {{ country?.currencies | jsonToList:'currencies' }}</p>
    </div>
  </article>
  `,
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {
  @Input() country?: Country;
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '../../models/country.model';
import { CountryCardComponent } from './country-card.component';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, CountryCardComponent],
  template: `
  <section *ngIf="countries?.length; else empty">
    <div class="grid">
      <app-country-card *ngFor="let c of countries" [country]="c"></app-country-card>
    </div>
  </section>
  <ng-template #empty>
    <p class="muted">No hay resultados aún.</p>
  </ng-template>
  `,
  styles: [`
    .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1rem;margin-top:1rem}
    .muted{color:#6b7280}
  `]
})
export class CountriesListComponent{
  @Input() countries: Country[] = [];
}

import { Routes } from '@angular/router';

import { CountryByNameComponent } from './features/countries/country-by-name.component';
import { CountriesByRegionComponent } from './features/countries/countries-by-region.component';
import { CountryByCodeComponent } from './features/countries/country-by-code.component';
import { CountriesByLangComponent } from './features/countries/countries-by-lang.component';
import { CountriesByCurrencyComponent } from './features/countries/countries-by-currency.component';
import { CountriesByCapitalComponent } from './features/countries/countries-by-capital.component';
import { CountriesBySubregionComponent } from './features/countries/countries-by-subregion.component';
import { CountriesTopByPopulationComponent } from './features/countries/countries-top-by-pop.component';

export const routes: Routes = [
  { path: '', redirectTo: 'country-name', pathMatch: 'full' },
  { path: 'country-name', component: CountryByNameComponent },
  { path: 'countries-region', component: CountriesByRegionComponent },
  { path: 'countries-lang', component: CountriesByLangComponent },
  { path: 'countries-currency', component: CountriesByCurrencyComponent },
  { path: 'countries-capital', component: CountriesByCapitalComponent },
  { path: 'countries-subregion', component: CountriesBySubregionComponent },
  { path: 'country-code', component: CountryByCodeComponent },
  { path: 'countries-top-pop', component: CountriesTopByPopulationComponent },
  { path: '**', redirectTo: 'country-name' }
];

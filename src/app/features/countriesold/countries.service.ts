import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Country } from '../../models/country.model';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private http = inject(HttpClient);
  private base = 'https://restcountries.com/v3.1';
  private fields = 'name,cca3,flags,capital,region,subregion,population,languages,currencies';

  all(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.base}/all?fields=${this.fields}`);
  }
  byName(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.base}/name/${encodeURIComponent(term)}?fields=${this.fields}`);
  }
  byRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.base}/region/${encodeURIComponent(region)}?fields=${this.fields}`);
  }
  bySubregion(sub: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.base}/subregion/${encodeURIComponent(sub)}?fields=${this.fields}`);
  }
  byLanguage(lang: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.base}/lang/${encodeURIComponent(lang)}?fields=${this.fields}`);
  }
  byLang(lang: string): Observable<Country[]> { return this.byLanguage(lang); } // alias
  byCurrency(cur: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.base}/currency/${encodeURIComponent(cur)}?fields=${this.fields}`);
  }
  byCapital(cap: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.base}/capital/${encodeURIComponent(cap)}?fields=${this.fields}`);
  }
  byCode(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.base}/alpha/${encodeURIComponent(code)}?fields=${this.fields}`);
  }
  listTopByPopulation(n: number): Observable<Country[]> {
    return this.all().pipe(
      map(arr => (arr ?? []).slice().sort((a,b)=> (b.population??0)-(a.population??0)).slice(0, n))
    );
  }
}

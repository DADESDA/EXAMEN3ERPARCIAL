import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
  <header class="site-header">
    <div class="container">
      <h1>Atlas del Mundo</h1>
    </div>
  </header>

  <main class="page container">
    <!-- Sidebar wizard -->
    <aside class="wizard">
      <a class="step" routerLink="/country-name" routerLinkActive="active">
        <span class="index">1</span>
        <div class="labels">
          <b>Nombre</b>
          <small>/name</small>
        </div>
      </a>

      <a class="step" routerLink="/countries-region" routerLinkActive="active">
        <span class="index">2</span>
        <div class="labels">
          <b>Región</b>
          <small>/region</small>
        </div>
      </a>

      <a class="step" routerLink="/countries-lang" routerLinkActive="active">
        <span class="index">3</span>
        <div class="labels">
          <b>Idioma</b>
          <small>/lang</small>
        </div>
      </a>

      <a class="step" routerLink="/countries-currency" routerLinkActive="active">
        <span class="index">4</span>
        <div class="labels">
          <b>Moneda</b>
          <small>/currency</small>
        </div>
      </a>

      <a class="step" routerLink="/countries-capital" routerLinkActive="active">
        <span class="index">5</span>
        <div class="labels">
          <b>Capital</b>
          <small>/capital</small>
        </div>
      </a>

      <a class="step" routerLink="/countries-subregion" routerLinkActive="active">
        <span class="index">6</span>
        <div class="labels">
          <b>Subregión</b>
          <small>/subregion</small>
        </div>
      </a>

      <a class="step" routerLink="/country-code" routerLinkActive="active">
        <span class="index">7</span>
        <div class="labels">
          <b>Código</b>
          <small>/alpha</small>
        </div>
      </a>

      <a class="step" routerLink="/countries-top-pop" routerLinkActive="active">
        <span class="index">8</span>
        <div class="labels">
          <b>Top población</b>
          <small>/ranking</small>
        </div>
      </a>
    </aside>

    <!-- Panel tipo “tarjeta” de la maqueta -->
    <section class="panel">
      <div class="card form-card">
        <h2 class="card-title">Búsqueda</h2>
        <router-outlet />
      </div>
    </section>
  </main>
  `,
  styles: [`
    /* Layout base */
    .container{max-width:1100px;margin:0 auto;padding:0 16px}
    .site-header{background:#0a4aa3;color:#fff;padding:18px 0}
    .site-header h1{margin:0;font-size:22px;font-weight:700;letter-spacing:.2px}

    .page{display:grid;grid-template-columns:280px 1fr;gap:28px;align-items:start;margin:28px auto}

    /* Wizard lateral (flechas estilo maqueta) */
    .wizard{display:flex;flex-direction:column;gap:10px}
    .step{
      display:flex;align-items:center;gap:12px;
      background:#e8edf3;border-radius:6px;min-height:58px;
      padding:12px 14px;position:relative;text-decoration:none;color:#1f2a37;
    }
    .step::after{
      content:'';position:absolute;right:-16px;top:0;bottom:0;
      width:0;border-top:29px solid transparent;border-bottom:29px solid transparent;
      border-left:16px solid #e8edf3;
    }
    .step .index{
      width:32px;height:32px;border-radius:4px;background:#cfd8e3;
      display:grid;place-items:center;font-weight:700;
    }
    .step .labels b{display:block;font-size:14px;margin-bottom:2px}
    .step .labels small{color:#5b6776}

    .step.active{background:#3aa0ff;color:#fff}
    .step.active::after{border-left-color:#3aa0ff}
    .step.active .index{background:rgba(255,255,255,.25);color:#fff}
    .step:hover{filter:brightness(0.98)}

    /* Panel de la derecha (tarjeta blanca tipo “Account Setup”) */
    .panel{width:100%}
    .form-card{
      background:#fff;border:1px solid #e5e7eb;border-radius:10px;
      padding:22px 22px 18px 22px;box-shadow:0 6px 18px rgba(16,24,40,.06);
    }
    .card-title{margin:0 0 14px 0;font-size:18px}

    /* Inputs/controles del contenido de cada tab */
    :host ::ng-deep form.bar{display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;margin-bottom:10px}
    :host ::ng-deep input,:host ::ng-deep select,:host ::ng-deep button{
      padding:.56rem .8rem;border:1px solid #d1d5db;border-radius:8px;font-size:14px
    }
    :host ::ng-deep button{background:#2563eb;color:#fff;border-color:#2563eb;cursor:pointer}
    :host ::ng-deep button:hover{filter:brightness(.98)}

    /* Grid de tarjetas de países */
    :host ::ng-deep .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px}
    :host ::ng-deep .card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:10px;box-shadow:0 1px 2px rgba(0,0,0,.05)}
    :host ::ng-deep .card .media{width:88px;height:58px;object-fit:cover;border-radius:8px;border:1px solid #eee}
    :host ::ng-deep .card h4{margin:.25rem 0 .25rem 0;font-weight:600}
    :host ::ng-deep .card .small{margin:.1rem 0;color:#555;font-size:.9rem}

    /* Responsive: wizard arriba en móviles */
    @media (max-width: 900px){
      .page{grid-template-columns:1fr}
      .wizard{flex-direction:row;flex-wrap:wrap}
      .step{padding:10px 12px}
      .step::after{display:none}
    }
  `]
})
export class AppComponent {}

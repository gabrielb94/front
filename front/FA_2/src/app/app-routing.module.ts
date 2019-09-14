import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },/*
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},*/
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'logup', loadChildren: './logup/logup.module#LogupPageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'balance', loadChildren: './balance/balance.module#BalancePageModule' },
  { path: 'perfiles', loadChildren: './perfiles/perfiles.module#PerfilesPageModule' },
  { path: 'cuenta', loadChildren: './cuenta/cuenta.module#CuentaPageModule' },
  { path: 'crear-perfil-admin', loadChildren: './crear-perfil-admin/crear-perfil-admin.module#CrearPerfilAdminPageModule' },
  { path: 'crear-perfil-alum', loadChildren: './crear-perfil-alum/crear-perfil-alum.module#CrearPerfilAlumPageModule' },
  { path: 'crear-perfil-prof', loadChildren: './crear-perfil-prof/crear-perfil-prof.module#CrearPerfilProfPageModule' },
  { path: 'home-admin', loadChildren: './home-admin/home-admin.module#HomeAdminPageModule' },
  { path: 'home-alum', loadChildren: './home-alum/home-alum.module#HomeAlumPageModule' },
  { path: 'home-prof', loadChildren: './home-prof/home-prof.module#HomeProfPageModule' },
  { path: 'crear-actividad', loadChildren: './crear-actividad/crear-actividad.module#CrearActividadPageModule' },
  { path: 'actividades', loadChildren: './actividades/actividades.module#ActividadesPageModule' },
  { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'crear-evento', loadChildren: './crear-evento/crear-evento.module#CrearEventoPageModule' },
  { path: 'alumnos', loadChildren: './alumnos/alumnos.module#AlumnosPageModule' },
  { path: 'solicitudes', loadChildren: './solicitudes/solicitudes.module#SolicitudesPageModule' },
  { path: 'foros', loadChildren: './foros/foros.module#ForosPageModule' },
  { path: 'crear-foro', loadChildren: './crear-foro/crear-foro.module#CrearForoPageModule' },
  { path: 'balance-perfil', loadChildren: './balance-perfil/balance-perfil.module#BalancePerfilPageModule' },
  { path: 'buscador', loadChildren: './buscador/buscador.module#BuscadorPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

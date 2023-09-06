import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_ROUTE, PANEL_ROUTE } from '@lib/config/routing/routes';

const routes: Routes = [
  {
    path: AUTH_ROUTE.name,
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: PANEL_ROUTE.name,
    loadChildren: () =>
      import('./features/panel/panel.module').then((m) => m.PanelModule),
  },
  {
    path: '**',
    redirectTo: AUTH_ROUTE.name,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

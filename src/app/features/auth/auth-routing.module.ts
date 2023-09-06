import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from '@lib/config/routing/routes';

const routes: Routes = [
  {
    path: SIGN_IN_ROUTE.name,
    loadChildren: () =>
      import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: SIGN_UP_ROUTE.name,
    loadChildren: () =>
      import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: '**',
    redirectTo: SIGN_IN_ROUTE.name,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

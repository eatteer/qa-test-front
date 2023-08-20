import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: '**',
    redirectTo: 'sign-in',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

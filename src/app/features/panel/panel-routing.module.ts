import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sessionGuard } from '@features/lib/guards/session/session.guard';

const routes: Routes = [
  {
    path: '',
    canMatch: [sessionGuard],
    loadChildren: () =>
      import('./pages/panel-root/panel-root.module').then(
        (m) => m.PanelRootModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}

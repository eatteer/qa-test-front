import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelRootComponent } from './panel-root.component';

const routes: Routes = [{ path: '', component: PanelRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRootRoutingModule {}

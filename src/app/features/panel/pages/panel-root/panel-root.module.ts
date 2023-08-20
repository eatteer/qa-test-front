import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRootRoutingModule } from './panel-root-routing.module';
import { PanelRootComponent } from './panel-root.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

@NgModule({
  declarations: [PanelRootComponent],
  imports: [CommonModule, PanelRootRoutingModule, NavbarModule],
})
export class PanelRootModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { PanelRootComponent } from './panel-root.component';

// Modules
import { NavbarModule } from '@features/lib/components/navbar/navbar.module';
import { PanelRootRoutingModule } from './panel-root-routing.module';

@NgModule({
  declarations: [PanelRootComponent],
  imports: [CommonModule, PanelRootRoutingModule, NavbarModule],
})
export class PanelRootModule {}

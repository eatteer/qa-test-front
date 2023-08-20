import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-root',
  templateUrl: './panel-root.component.html',
  styles: [
    `
      .intro-card {
        @apply rounded-xl h-44 bg-gradient-to-br from-primary to-cyan-500 hover:scale-105 transition cursor-pointer;
      }
    `,
  ],
})
export class PanelRootComponent {}

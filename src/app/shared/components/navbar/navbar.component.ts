import { Component } from '@angular/core';
import { SessionService } from 'src/app/core/session/services/session/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  public constructor(public readonly sessionService: SessionService) {}
}

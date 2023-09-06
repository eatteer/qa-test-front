import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Constants
import { SIGN_IN_ROUTE } from '@lib/config/routing/routes';

// Domain
import { User } from '@core/user/domain/user.model';

// Services
import { SessionService } from '@features/lib/services/session/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  public user: User = this.sessionService.getUser();

  public constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  public logout(): void {
    this.sessionService.deauthenticate().subscribe();
    this.router.navigate([SIGN_IN_ROUTE.rootPath]);
  }
}

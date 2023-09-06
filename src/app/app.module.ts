import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Infrastructure
import { ApiSessionRepository } from './core/session/infrastructure/api-session.repository';
import { NavigatorLocalStorage } from '@core/shared/infrastructure/navigator-local-storage-repository';

// Domain
import { SessionRepository } from './core/session/domain/session.repository';
import { LocalStorageRepository } from '@core/shared/domain/local-storage.repository';

// Library
import { ToastsModule } from '@features/lib/library/toasts/toasts.module';

// Config
import { GlobalErrorHandler } from '@lib/config/errors/global-error-handler';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ToastsModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: LocalStorageRepository, useClass: NavigatorLocalStorage },
    { provide: SessionRepository, useClass: ApiSessionRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

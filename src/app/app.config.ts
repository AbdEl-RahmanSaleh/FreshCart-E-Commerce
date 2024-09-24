import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { ActivatedRoute, provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }) ,importProvidersFrom(RouterModule,BrowserAnimationsModule),provideAnimations() ,provideRouter(routes),provideHttpClient(withFetch()),provideClientHydration()]
};

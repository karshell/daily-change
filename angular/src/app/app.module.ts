import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AppContextService } from './services/app-context.service';
import { SavingsService } from './services/savings.service';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { SavingsListComponent } from './components/savings-list/savings-list.component';

const appRoutes: Routes = [
  { path: 'index', component: AppComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: '**', redirectTo: '/index'}
];

@NgModule({
  declarations: [
    AppComponent,
    PreferencesComponent,
    SavingsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    CalendarModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    AppContextService,
    SavingsService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

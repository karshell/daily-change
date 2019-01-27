import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule }   from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { AppContextService } from './services/app-context.service';
import { SavingsService } from './services/savings.service';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { SavingsListComponent } from './components/savings-list/savings-list.component';

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
  ],
  providers: [
    AppContextService,
    SavingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

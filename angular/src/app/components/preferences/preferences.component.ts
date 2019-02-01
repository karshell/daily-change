import { Component } from '@angular/core';
import { AppContextService } from '../../services/app-context.service';
import { Preferences } from './preferences';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})

export class PreferencesComponent {
    private goalTitle: string;
    private goalAmount: number;
    private goalCurrency: string;
    private goalTargetDate: Date;

    private showTitleError: boolean;
    private showTargetError: boolean;
    private showCurrencyError: boolean;
    private showDateError: boolean;

    constructor(private appContextService: AppContextService, private router: Router) {
        this.showTitleError = false;
        this.showTargetError = false;
        this.showDateError = false;
        this.showCurrencyError = false;
     }

    currencies = ['CAD', 'USD', 'EUR'];

    onSubmit() {
        this.showTitleError = false;
        this.showTargetError = false;
        this.showCurrencyError = false;
        this.showDateError = false;

        console.log(this.goalTitle);
        if (!this.goalTitle) {
            this.showTitleError = true;
            return;
        }

        if (!this.goalAmount || this.goalAmount < 1) {
            this.showTargetError = true;
            return;
        }

        if (!this.goalCurrency) {
            this.showCurrencyError = true;
            return;
        }

        if (!this.goalTargetDate) {
            this.showDateError = true;
            return;
        }

        const preferences = new Preferences(this.goalTitle, this.goalAmount, this.goalTargetDate, this.goalCurrency);
        this.appContextService.SetPreferences(preferences);
        this.router.navigate(['index']);
    }

    getMinTargetDate(): Date {
        const today = new Date();
        const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

        return tomorrow;
    }
}

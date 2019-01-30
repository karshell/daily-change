import { Component, EventEmitter, Output } from '@angular/core';
import { AppContextService } from '../../services/app-context.service';
import { Preferences } from './preferences';
import { Router } from '@angular/router';

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

    constructor(private appContextService: AppContextService, private router: Router) { }

    currencies = ['CAD', 'USD', 'EUR'];

    onSubmit() {
        const preferences = new Preferences(this.goalTitle, this.goalAmount, this.goalTargetDate, this.goalCurrency);
        console.log(preferences);

        this.appContextService.SetPreferences(preferences);
        this.router.navigateByUrl('index');
    }

    getMinTargetDate(): Date {
        const today = new Date();
        const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

        return tomorrow;
    }
}

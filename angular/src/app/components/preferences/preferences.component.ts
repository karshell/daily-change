import { Component, EventEmitter, Output } from '@angular/core';
import { AppContextService } from '../../services/app-context.service';
import { Preferences } from './preferences';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})

export class PreferencesComponent {
    @Output() submitted: EventEmitter<any> = new EventEmitter();
    private goalTitle: string;
    private goalAmount: number;
    private goalCurrency: string;
    private goalTargetDate: Date;

    constructor(private appContextService: AppContextService) { }

    currencies = ['CAD', 'USD', 'EUR'];

    onSubmit() {
        const preferences = new Preferences(this.goalTitle, this.goalAmount, this.goalTargetDate, this.goalCurrency);
        console.log(preferences);

        this.appContextService.SetPreferences(preferences);
        this.submitted.emit();
    }

    getMinTargetDate(): Date {
        const today = new Date();
        const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

        return tomorrow;
    }
}

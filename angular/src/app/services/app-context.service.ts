import { Injectable } from '@angular/core';
import { Preferences } from '../components/preferences/preferences';

@Injectable({
  providedIn: 'root',
})

export class AppContextService {
    private preferences: Preferences;

    constructor() {
        this.preferences = new Preferences();
    }

    GetPreferences(): Preferences {
        return this.preferences;
    }

    SetPreferences(preferences: Preferences) {
        this.preferences = preferences;
    }

    public IsInitialized(): boolean {
        return this.preferences.Currency != null &&
        this.preferences.SavingsTarget != null &&
        this.preferences.TargetDate != null &&
        this.preferences.GoalTitle != null;
    }
}

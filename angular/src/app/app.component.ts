import { Component, OnInit } from '@angular/core';
import { AppContextService } from './services/app-context.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private contextService: AppContextService, private router: Router) {
    if (!this.IsInitialized) {
      this.router.navigateByUrl('/preferences');
    }
  }

  SaveSettings(): void {
    console.log('Saving preferences');
    this.router.navigateByUrl('/index');
  }

  IsInitialized(): boolean {
    return this.contextService.IsInitialized();
  }
}

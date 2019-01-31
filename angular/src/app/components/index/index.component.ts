import { Component, OnInit } from '@angular/core';
import { AppContextService } from '../../services/app-context.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
  })

  export class IndexComponent implements OnInit {
      
    constructor(private appContextService: AppContextService, private router: Router){
    }

    ngOnInit(): void {
        if(!this.appContextService.IsInitialized()){
            this.router.navigateByUrl('/preferences');
        }
    }
  }
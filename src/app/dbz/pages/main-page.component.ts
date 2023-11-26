import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {

    get characters(): ICharacter[] {
        return [...this.dbzService.characters];
    }

    constructor(private dbzService: DbzService) { 
        //this.characters = [...dbzService.characters];
    }

    ngOnInit() { }

    
}
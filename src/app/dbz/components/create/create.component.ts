import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';



@Component({
  selector: 'dbz-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {


  /**
   *
   */
  constructor(private dbzService: DbzService) {
    
  }

  public character: ICharacter = {
    name: '',
    power: 0,
  };


  saveCharacter() {
    // debugger; // makes a breakpoint in the browser
    this.dbzService.saveCharacter(this.character);
    this.character.name = '';
    this.character.power = 0;
    //crypto.randomUUID();
  }



}

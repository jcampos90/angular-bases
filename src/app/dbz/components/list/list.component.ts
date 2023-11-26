import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characters: ICharacter[] = [];

  constructor(private dbzService: DbzService) {}

  onDelete(id: string) {
    this.dbzService.deleteCharacterById(id);
  }
}

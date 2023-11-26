import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: ICharacter[] = [
        {id: crypto.randomUUID(),name:"Goku",power:1000},
        {id: crypto.randomUUID(),name:"Krillin",power:500},
        {id: crypto.randomUUID(),name:"Yancha",power:10}
    ];
    
    constructor() { }

    saveCharacter(character:ICharacter) {
        console.log('From Main Page',character);
        character.id = crypto.randomUUID();
        this.characters.push({...character});
    }

    deleteCharacterById(id: string) {
        console.log('Character index', id);
        this.characters = [ ...this.characters.filter(c=> c.id!==id)];
        console.log(this.characters);
        
    }
    
}
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  //Metodo que agrega un nuevo caracter de tipo Character al final en el arreglo characters
  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(index:number){
  //this.characters.splice(index,1);

  deleteCharacterById(id: string) 
    // this.characters es probablemente una lista/array que contiene objetos de personajes.
  
  // El método filter() crea un nuevo array con todos los elementos que cumplan la condición proporcionada.
  // En este caso, se está creando un nuevo array excluyendo el personaje con el ID proporcionado.
  {
    this.characters = this.characters.filter(character => character.id !== id
    );
  }
}

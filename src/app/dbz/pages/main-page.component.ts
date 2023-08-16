import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  
constructor( private dbzService: DbzService) {}

get characters(): Character[ ] {

    return [...this.dbzService.characters]
}

// // El operador de propagación (...) en este contexto se utiliza para crear una nueva matriz
//  que contiene los mismos elementos que this.dbzService.characters.
//   Sin embargo, a diferencia de una simple asignación (this.dbzService.characters), 
//   el uso del operador de propagación crea una copia independiente del array original. 
//   Esto significa que si haces cambios en la nueva matriz, no afectarán el array original y viceversa.



onDeleteCharacter( id:string):void{
    this.dbzService.deleteCharacterById(id)
}

onNewCharacter( character: Character):void {

    this.dbzService.addCharacter(character);

}



}
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  /*Emite un Character para que el mainpage html esuche eon onNEw character
 lo cual lo hace a travbes del @output */

  @Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {

    const chompipe = {
      name : "chompipeee"
    }

    const pato = chompipe

    pato.name = "pato"



    console.log(pato);
    console.log(chompipe);
    
    
    console.log(this.character);

    /*Condicional para permiter solo registros por aprte del usuario que tenga nomnre */
  //  if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}

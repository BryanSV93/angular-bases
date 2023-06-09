import { Component } from "@angular/core";





@Component({
    selector: 'app-counter',
    template: `

    <h3>Counter: {{ counter}}</h3>

<button (click)="increaseBy(counter)">+1</button>
<button (click)="decreaseBy(counter)">-1</button>
<button (click)="resetCounter()">RESET</button>
`

})
export class CounterComponent{

   public counter:number  = 10;


    increaseBy(value:number):void{
  this.counter = this.counter +1
    }
    decreaseBy(value:number):void{
  this.counter = this.counter -1
    }
   resetCounter():void{
    this.counter = 10;
   }
}
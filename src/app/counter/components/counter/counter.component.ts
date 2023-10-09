

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola Counter</h1>
  <h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBy()">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="minutBy(counter)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 10;

  increaseBy(): void{
    this.counter +=1;
  }
  minutBy(value: number): void{
    this.counter = value - 1;
  }
  reset(){
    this.counter = 10;
  }

}

/*import { Component } from '@angular/core';

@Component({
  selector:'app-counter',
  template:'<h1>Hola Counter</h1>'
})
export class CounterComponent{

}
*/

// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: '' +
    '<div id="mainArea">' +
      'button count: <span>{{counter}}</span>' +
      '<button id="mainButton" (click)="increaseCounter()">Increase</button>' +
    '</div>',
  styles: []
})

export class MainAppComponent implements OnInit {
  // code goes here

  public counter = 0;

  public increaseCounter() {
    ++this.counter;
  }
}
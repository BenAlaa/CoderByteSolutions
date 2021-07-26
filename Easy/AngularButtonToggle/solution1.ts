// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: '<button (click)="onChange(name)">{{name}}</button>',
  styles: []
})

export class MainAppComponent implements OnInit {
  // code goes here
  name = 'ON';
  onChange(text){
    if (text=='ON') {this.name = 'OFF'; } else { this.name = 'ON'; }
  }

}
// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: '' +
    '<div>' +
      '<input type="text" value="firstname" id="firstname">' +
      '<input type="text" value="lastname" id="lastname">' +
      '<button (click)="onGenerate()">Generate</button>' + 
      '<span id="output">{{username}}</span>' +
    '</div>',
  styles: []
})

export class MainAppComponent implements OnInit {
  firstname: string = "Coder";
  lastname: string = "Byte";
  username: string;

  onGenerate() {
    this.username = 
      this.firstname.toLowerCase() + "_" 
      + this.lastname.toLowerCase() + "_"
      + this.generateRandomNumber();
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 9) + 1;
  } 
}

























// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-area',
  template: '' +
    '<div>' +
      '<input type="text" [formControl]="firstname" id="firstname">' +
      '<input type="text" [formControl]="lastname" id="lastname">' +
      '<button (click)="onGenerate()">Generate</button>' + 
      '<span id="output">{{ generatedName }}</span>' +
    '</div>',
  styles: []
})

export class MainAppComponent implements OnInit {
  firstname = new FormControl('Coder');
  lastname = new FormControl('Byte');
  generatedName ='generated username...';

  onGenerate = function () {
    this.generatedName = `${firstname.value.toLowerCase()}_${lastname.value.toLowerCase()}_${randomInteger(1,9)}`;
  }
}

function randomInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

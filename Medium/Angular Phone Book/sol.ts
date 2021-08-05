// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-area',
  template: `
    <div class="form-wrapper">
      <form [formGroup]="person" (ngSubmit)="onSubmit()">
        <div>
          <label for="firstName">First name</label>
          <input formControlName="firstname" type="text" name="firstName" id="firstName" class="userFirstname">
        </div>
        <div>
          <label for="lastName">Last name</label>
          <input formControlName="lastname" type="text" name="lastName" id="lastName" class="userLastname">
        </div>
        <div>
          <label for="phoneNumber">Phone number</label>
          <input formControlName="phone" type="tel" name="phoneNumber" id="phoneNumber" class="userPhone">
        </div>
        <div>
          <input type="submit" value="submit" class="submitButton">
        </div>
      </form>
    <div>
    <div class="informationTable">
      <table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone</th>
        </tr>
        <tr *ngFor="let p of list">
          <td>{{p.firstname}}</td>
          <td>{{p.lastname}}</td>
          <td>{{p.phone}}</td>
        </tr>
      </table>
    </div>`,
  styles: []
})

export class MainAppComponent implements OnInit {
  list = [];

  initValues = {
    firstname: 'Coder',
    lastname: 'Byte',
    phone: '8885559999'
  }

  person = new FormGroup({
    firstname: new FormControl(this.initValues.firstname, Validators.required),
    lastname: new FormControl(this.initValues.lastname, Validators.required),
    phone: new FormControl(this.initValues.phone, Validators.required)
  });

  onSubmit () {
    if (this.person.valid) {
      this.list.push(this.person.value);
      this.list.sort((a, b) => a.lastname.toLowerCase().localeCompare(b.lastname.toLowerCase()));
      this.person.reset(this.initValues);
    }
  }
}

































// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: `
    <div class="form-wrapper">
      <form (ngSubmit)="onSubmit()">
        <div>
          <label for="firstName">First name</label>
          <input 
          type="text" 
          name="firstName" 
          id="firstName" 
          class="userFirstname"
          [(ngModel)]="model.firstName">
        </div>
        <div>
          <label for="lastName">Last name</label>
          <input 
          type="text" 
          name="lastName" 
          id="lastName" 
          class="userLastname"
          [(ngModel)]="model.lastName">
        </div>
        <div>
          <label for="phoneNumber">Phone number</label>
          <input 
          type="tel" 
          name="phoneNumber" 
          id="phoneNumber" 
          class="userPhone"
          [(ngModel)]="model.phoneNumber">
        </div>
        <div>
          <input type="submit" value="submit" class="submitButton">
        </div>
      </form>
    <div>
    <div class="informationTable">
    <table>
        <thead>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone</th>
        </thead>
        <tbody>
            <tr *ngFor="let user of users; trackBy: index" >
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.phoneNumber}}</td>
            </tr>
        </tbody>
    </table>
    </div>`,
  styles: []
})

export class MainAppComponent implements OnInit {

  model = {
    firstName: 'Coder',
    lastName:'Byte',
    phoneNumber:8885559999,
    index: 0
    };
    users = [];

    onSubmit(){
      this.model.index = this.users.length;
      var ordered = [...this.users, this.model];
      ordered = ordered.sort((a, b) => a.lastName.localeCompare(b.lastName));
      this.users = ordered;
      this.model = { ...this.model };
    }
}
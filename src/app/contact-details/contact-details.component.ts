import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

  log(x) {
    console.log(x);
  }

  onSubmitMethod(from) {
    console.log('submit')
  }

  getContactMethods() {
    return [
      { id: 1, name: 'Email'},
      { id: 2, name: 'Phone'}
    ]
  }

  constructor() { }
}
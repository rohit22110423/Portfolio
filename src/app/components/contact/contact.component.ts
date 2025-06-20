import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      this.successMessage = 'Message sent successfully!';
      this.errorMessage = '';
      this.contact = { name: '', email: '', message: '' }; // Clear the form
    } else {
      this.errorMessage = 'Please fill out all fields.';
      this.successMessage = '';
    }
  }
}

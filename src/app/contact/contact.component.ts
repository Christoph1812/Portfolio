import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  async sendMail() {
    if (this.contactForm.valid){
      const formData = new FormData();
      formData.append('name', this.contactForm.get('name')!.value);
      formData.append('email', this.contactForm.get('email')!.value);
      formData.append('message', this.contactForm.get('message')!.value);


    // Server-Anfrage senden
    await fetch('https://christoph-haase.developerakademie.net/send_mail/send_mail.php', {
      method: 'POST',
      body: formData
    });
     
      alert('Nachricht wurde gesendet!');
      this.contactForm.reset();
    } else {
      // Markiere die Formularfelder als berührt, um Fehlermeldungen anzuzeigen
      this.contactForm.markAllAsTouched();
    }
  }
}










// @ViewChild('myForm') myForm!: ElementRef;
// @ViewChild('nameField') nameField!: ElementRef;
// @ViewChild('emailField') emailField!: ElementRef;
// @ViewChild('messageField') messageField!: ElementRef;

// async sendMail() {

//   let nameField = this.nameField.nativeElement;
//   let messageField = this.messageField.nativeElement;
//   let emailField = this.emailField.nativeElement;
//   let sendButton = this.myForm.nativeElement;
//   nameField.disabled = true;
//   emailField.disabled = true;
//   messageField.disabled = true;
//   sendButton.disabled = true;
//   //Animation triggern

//   let fd = new FormData();
//   fd.append('name', nameField.value);
//   fd.append('email', emailField.value);
//   fd.append('message', messageField.value);

  // senden
 

//   // Text anzeigen: Nachricht gesendet.
//   nameField.disabled = false;
//   emailField.disabled = false;
//   messageField.disabled = false;
//   sendButton.disabled = false;


// }


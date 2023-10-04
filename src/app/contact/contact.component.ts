import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  async sendMail() {
    if (this.myForm.valid){
      const formData = {
        name: this.myForm.get('name')!.value,
        email: this.myForm.get('email')!.value,
        message: this.myForm.get('message')!.value
      };

    // Server-Anfrage senden
    await fetch('https://christoph-haase.developerakademie.net/send_mail/send_mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData) // Formulardaten als JSON-String senden
    });
     
      alert('Nachricht wurde gesendet!');
      this.myForm.reset();
    } else {
      // Markiere die Formularfelder als berührt, um Fehlermeldungen anzuzeigen
      this.myForm.markAllAsTouched();
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


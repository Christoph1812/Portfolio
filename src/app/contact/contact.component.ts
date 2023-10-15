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

  // async sendMail() {
  //   if (this.contactForm.valid){
  //     const formData = new FormData();
  //     const notification = document.getElementById("notification")
  //     formData.append('name', this.contactForm.get('name')!.value);
  //     formData.append('email', this.contactForm.get('email')!.value);
  //     formData.append('message', this.contactForm.get('message')!.value);

  //   await fetch('https://christoph-haase.developerakademie.net/send_mail/send_mail.php', {
  //     method: 'POST',
  //     body: formData
  //   });
  //     notification.style.display = "block";
  //     setTimeout(function() {
  //     notification.style.display = "none";
  //   }, 10000);
  //     this.contactForm.reset();
  //   } else {

  //     this.contactForm.markAllAsTouched();
  //   }
  // }

  async sendMail() {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('name', this.contactForm.get('name')!.value);
      formData.append('email', this.contactForm.get('email')!.value);
      formData.append('message', this.contactForm.get('message')!.value);

      const response = await fetch('https://christoph-haase.developerakademie.net/send_mail/send_mail.php', {
        method: 'POST',
        body: formData
      });
      if (response.status === 200) {
        this.showSucessMessage();
      } else {
        this.showErrorMessage();
      }
    }
  }

  showSucessMessage() {
    const notification = document.getElementById("sucess-message") as HTMLElement;

    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 5000);

    this.contactForm.reset();
  }

  showErrorMessage() {
    const notification = document.getElementById("error-message") as HTMLElement;

    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 5000);

    // this.contactForm.reset();
  }


}











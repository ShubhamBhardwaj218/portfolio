import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { UtilServiceService } from '../shared/utils/util-service.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent implements OnInit {
  
  // EmailJS Configuration
  private emailjsConfig = {
    serviceId: 'service_7yr5i1o',
    templateId: 'template_buiep0w',
    publicKey: 'pjNByvF5JRgbDHRmF'
  };

  public isSubmitting = false;
  totalExperience: string = '';

  constructor(private utilService: UtilServiceService){}

  ngOnInit(): void {
    this.totalExperience = this.utilService.experienceCalculator()
  }

  /**
   * Handle form submission
   */
  onSubmit(form: NgForm) {
    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      const formData = {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
        to_email: 'shubhambhardwaj218@gmail.com' // Your email where you want to receive messages
      };

      console.log('Form submitted:', formData);
      
      // Send email using EmailJS
      this.sendEmail(formData, form);
    }
  }

  /**
   * Send email using EmailJS
   */
  private sendEmail(formData: any, form: NgForm) {
    emailjs.send(
      this.emailjsConfig.serviceId,
      this.emailjsConfig.templateId,
      formData,
      this.emailjsConfig.publicKey
    ).then(
      (response) => {
        console.log('Email sent successfully!', response.status, response.text);
        this.showSuccessMessage();
        form.resetForm();
        this.isSubmitting = false;
      },
      (error) => {
        console.error('Failed to send email:', error);
        this.showErrorMessage();
        this.isSubmitting = false;
      }
    );
  }

  /**
   * Copy text to clipboard
   */
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.showCopySuccessMessage(text);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  /**
   * Scroll to contact form
   */
  scrollToForm() {
    const formElement = document.querySelector('.contact-form-section');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  /**
   * Show success message after form submission
   */
  private showSuccessMessage() {
    // Create and show a temporary success notification
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4caf50, #45a049);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 500;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      ">
        ✅ Message sent successfully! I'll get back to you soon.
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
      notification.remove();
    }, 4000);
  }

  /**
   * Show error message for failed email sending
   */
  private showErrorMessage() {
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #f44336, #d32f2f);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 500;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      ">
        ❌ Failed to send message. Please try again or contact me directly.
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }

  /**
   * Show copy success message
   */
  private showCopySuccessMessage(text: string) {
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #64b5f6, #42a5f5);
        color: white;
        padding: 12px 20px;
        border-radius: 10px;
        font-weight: 500;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        font-size: 0.9rem;
      ">
        📋 Copied "${text}" to clipboard!
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 2.5 seconds
    setTimeout(() => {
      notification.remove();
    }, 2500);
  }
}

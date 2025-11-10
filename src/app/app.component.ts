import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, SkillsComponent, ResumeComponent, ContactMeComponent]
})
export class AppComponent {
  title = 'shubham-portfolio-angular';
  innerWidth: number | undefined;
  navigateTo = '';

  @ViewChild('aboutSection') aboutSectionRef!: ElementRef;
  @ViewChild('home') homeRef!: ElementRef;
  @ViewChild('skillSection') skillSectionRef!: ElementRef;
  @ViewChild('resumeSection') resumeSectionRef!: ElementRef;
  @ViewChild('contactSection') contactSectionRef!: ElementRef;

  navigate(navigateTo: string) {
    this.navigateTo = navigateTo;

    switch (navigateTo) {
      case 'home': {
        this.homeRef.nativeElement.scrollIntoView({ behavior: 'smooth' });

        break;
      }
      case 'aboutSection': {
        this.aboutSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' })

        break;
      }
      case 'skillSection': {
        this.skillSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' })

        break;
      }
      case 'resumeSection': {
        this.resumeSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' })

        break;
      }
      case 'contactSection': {
        this.contactSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' })

        break;
      }
    }
  }
}

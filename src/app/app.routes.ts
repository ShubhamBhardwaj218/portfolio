import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'resume', component: ResumeComponent},
    { path: 'contact', component: ContactMeComponent},
    { path: '**', redirectTo: '' }
];

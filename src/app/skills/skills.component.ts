import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LabelConstant } from '../shared/label/label-constant';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatProgressBarModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {
  techSections = LabelConstant.techSections;
  showProgressView = true;
  animationsTriggered = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Trigger animations when component loads
    setTimeout(() => {
      this.animationsTriggered = true;
    }, 500);
  }

  // Method to get category icon class based on title
  getCategoryIcon(title: string): string {
    switch (title.toLowerCase()) {
      case 'technologies':
        return 'tech';
      case 'tools':
        return 'tools';
      case 'methodologies':
        return 'methods';
      default:
        return 'tech';
    }
  }

  // Method to get skill level class based on value
  getSkillLevel(value: number): string {
    if (value >= 85) return 'expert';
    if (value >= 75) return 'advanced';
    if (value >= 60) return 'intermediate';
    return 'beginner';
  }

  // Method to get skill level text for cards (Option 2 only)
  getSkillLevelText(value: number): string {
    if (value >= 85) return 'Expert';
    if (value >= 75) return 'Advanced';
    if (value >= 60) return 'Intermediate';
    return 'Beginner';
  }

  // Method to get skill card class (Option 2 only)
  getSkillCardClass(value: number): string {
    return this.getSkillLevel(value);
  }
}

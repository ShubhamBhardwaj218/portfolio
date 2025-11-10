import { Component, OnInit } from '@angular/core';
import { UtilServiceService } from '../shared/utils/util-service.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  totalExperience: string = '';

  constructor(private utilSerice: UtilServiceService){}
  ngOnInit(): void {

    this.totalExperience = this.utilSerice.experienceCalculator();

  }

}

import { Component, OnInit } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {CommonModule} from '@angular/common'
import { UtilServiceService } from '../shared/utils/util-service.service';
import { LabelConstant } from '../shared/label/label-constant';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatStepperModule],
  providers: [UtilServiceService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  label = LabelConstant;
  profileSummary: string[] = [];
  constructor(private utils: UtilServiceService){}

  ngOnInit(): void {
    this.profileSummary = this.utils.listTransformation(LabelConstant.PROFILE_SUMMARY);
  }
}

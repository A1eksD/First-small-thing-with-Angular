import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from './loading-page/landingPage.component';
import { OurManuComponent } from './our-manu/our-manu.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ CommonModule, LandingPageComponent, OurManuComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

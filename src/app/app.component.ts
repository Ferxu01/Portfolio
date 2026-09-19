import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, BannerComponent, ExperienceComponent, AboutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {}

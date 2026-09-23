import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    ProjectsComponent,
    AboutComponent,
    TechnologiesComponent,
    FooterComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {}

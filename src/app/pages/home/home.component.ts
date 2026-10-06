import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { AboutComponent } from '../../components/about/about.component';
import { TechnologiesComponent } from '../../components/technologies/technologies.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    BannerComponent,
    ProjectsComponent,
    AboutComponent,
    TechnologiesComponent,
    FooterComponent,
  ],
})
export class HomeComponent {}

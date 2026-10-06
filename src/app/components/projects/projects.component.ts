import { Component } from '@angular/core';
import { ProjectCard } from './projects.model';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  imports: [TranslocoPipe, RouterLink],
})
export class ProjectsComponent {
  readonly projectCards: ProjectCard[] = [
    {
      id: 1,
      title: 'PROJECT_GENESIS_TITLE',
      description: 'PROJECT_GENESIS_DESCRIPTION',
      icon: 'assets/projects/genesis.png',
      link: 'projects/genesis',
    },
    {
      id: 2,
      title: 'PROJECT_VISIONARY_TITLE',
      description: 'PROJECT_VISIONARY_DESCRIPTION',
      icon: 'assets/projects/visionary.png',
      link: 'projects/visionary',
    },
    {
      id: 3,
      title: 'PROJECT_FERPLAY_TITLE',
      description: 'PROJECT_FERPLAY_DESCRIPTION',
      icon: 'assets/projects/ferplay.png',
      link: 'projects/ferplay',
    },
  ];
}

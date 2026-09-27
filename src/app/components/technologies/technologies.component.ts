import { Component } from '@angular/core';
import { Technology, TechnologyCategory } from './technologies.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  imports: [TranslocoPipe],
})
export class TechnologiesComponent {
  protected readonly mainStack: Technology[] = [
    {
      id: 'angular-ts',
      name: 'Angular + TypeScript',
      iconUrl: 'assets/technologies/angular.svg',
    },
    { id: 'nodejs', name: 'Node.js', iconUrl: 'assets/technologies/nodejs.svg' },
    { id: 'mysql', name: 'MySQL', iconUrl: 'assets/technologies/mysql.svg' },
  ];

  protected readonly categories: TechnologyCategory[] = [
    {
      title: 'FRONTEND',
      technologies: [
        { id: 'ionic', name: 'Ionic', iconUrl: 'assets/technologies/ionic.svg' },
        { id: 'electron', name: 'Electron', iconUrl: 'assets/technologies/electron.svg' },
      ],
    },
    {
      title: 'BACKEND',
      technologies: [
        { id: 'csharp', name: 'C#', iconUrl: 'assets/technologies/csharp.svg' },
        { id: 'dot-net', name: '.NET', iconUrl: 'assets/technologies/dot-net.svg' },
        { id: 'java', name: 'Java', iconUrl: 'assets/technologies/java.svg' },
        { id: 'python', name: 'Python', iconUrl: 'assets/technologies/python.svg' },
      ],
    },
    {
      title: 'DEVOPS_CLOUD',
      technologies: [
        { id: 'github', name: 'Git / GitHub', iconUrl: 'assets/technologies/github.svg' },
        { id: 'docker', name: 'Docker', iconUrl: 'assets/technologies/docker.svg' },
        { id: 'aws-cloud', name: 'AWS Cloud', iconUrl: 'assets/technologies/aws.svg' },
        { id: 'vercel', name: 'Vercel', iconUrl: 'assets/technologies/vercel.svg' },
      ],
    },
    {
      title: 'QA_AI',
      technologies: [
        { id: 'cypress', name: 'Cypress', iconUrl: 'assets/technologies/cypress.svg' },
        { id: 'jest', name: 'Jest', iconUrl: 'assets/technologies/jest.svg' },
        {
          id: 'scikit-learn',
          name: 'Machine Learning (Scikit-learn)',
          iconUrl: 'assets/technologies/scikit-learn.svg',
        },
      ],
    },
  ];
}

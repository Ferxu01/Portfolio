import { Component } from '@angular/core';
import { Technology, TechnologyCategory } from './technologies.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
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
      title: 'Frontend',
      technologies: [
        { id: 'ionic', name: 'Ionic', iconUrl: 'assets/technologies/ionic.svg' },
        { id: 'electron', name: 'Electron', iconUrl: 'assets/technologies/electron.svg' },
      ],
    },
    {
      title: 'Backend',
      technologies: [
        { id: 'csharp', name: 'C#', iconUrl: 'assets/technologies/csharp.svg' },
        { id: 'dot-net', name: '.NET', iconUrl: 'assets/technologies/dot-net.svg' },
        { id: 'java', name: 'Java', iconUrl: 'assets/technologies/java.svg' },
        { id: 'python', name: 'Python', iconUrl: 'assets/technologies/python.svg' },
      ],
    },
    {
      title: 'Bases de Datos / Cloud / DevOps',
      technologies: [
        { id: 'github', name: 'Git / GitHub', iconUrl: 'assets/technologies/github.svg' },
        { id: 'docker', name: 'Docker', iconUrl: 'assets/technologies/docker.svg' },
        { id: 'aws-cloud', name: 'AWS Cloud', iconUrl: 'assets/technologies/aws.svg' },
        { id: 'vercel', name: 'Vercel', iconUrl: 'assets/technologies/vercel.svg' },
      ],
    },
    {
      title: 'Testing, QA / IA',
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

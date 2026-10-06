import { Injectable } from '@angular/core';
import { Project } from '@pages/project-detail/project.model';
import projectsData from '@assets/data/projects.json';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly _projects: Project[] = projectsData;

  getProjects(): Project[] {
    return this._projects;
  }

  getProjectById(id: Project['id']): Project | null {
    const project = this._projects.find((project) => project.id === id);
    if (!project) return null;
    return project;
  }
}

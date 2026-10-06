import { Component, computed, effect, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProjectService } from '@core/services/project.service';
import { Project } from './project.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  imports: [RouterLink, TranslocoPipe],
})
export class ProjectDetailComponent {
  private readonly projectService = inject(ProjectService);
  private readonly router = inject(Router);

  readonly projectId = input.required<Project['id']>();

  protected readonly fullImageUrl = computed(() => {
    const project = this.project();
    if (!project) return null;
    return `/assets/projects/${project.imageUrl}`;
  });

  protected readonly project = computed(() => {
    const id = this.projectId();
    if (!id) return null;
    return this.projectService.getProjectById(id);
  });

  constructor() {
    effect(() => {
      const currentProject = this.project();

      if (!currentProject) {
        this.router.navigate(['/']);
        return;
      }
    });
  }
}

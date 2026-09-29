import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '@core/services/theme/theme.service';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  imports: [TranslocoPipe],
})
export class ThemeToggleComponent {
  private readonly themeService = inject(ThemeService);

  private readonly selectedTheme = computed(() => this.themeService.currentTheme());

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  protected isDarkTheme(): boolean {
    return this.selectedTheme() === 'dark';
  }
}

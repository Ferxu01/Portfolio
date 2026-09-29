import { DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly currentTheme = signal(this.getInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      this.document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('user_theme', theme);
    });
  }

  toggleTheme(): void {
    this.currentTheme.update((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  private isExistingTheme(value: string | null): value is Theme {
    return value === 'light' || value === 'dark';
  }

  private getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem('user_theme');
    if (this.isExistingTheme(savedTheme)) return savedTheme;

    return this.detectUserTheme();
  }

  private detectUserTheme(): Theme {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
}

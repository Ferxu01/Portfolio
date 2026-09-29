import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { LangSelectorComponent } from '../lang-selector/lang-selector.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

// eslint-disable-next-line unused-imports/no-unused-vars
const links = ['home', 'about', 'projects', 'technologies', 'contact'] as const;
type Link = (typeof links)[number];

interface NavLink {
  id: Link;
  label: string; // Translation key for the link label
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterLink, TranslocoPipe, LangSelectorComponent, ThemeToggleComponent],
})
export class HeaderComponent {
  protected readonly showScrollTop = signal(false);

  protected readonly links: NavLink[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT_ME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'technologies', label: 'TECHNOLOGIES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.showScrollTop.set(yOffset > 300);
  }

  protected scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

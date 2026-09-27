import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { LangSelectorComponent } from '../lang-selector/lang-selector.component';

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
  imports: [RouterLink, TranslocoPipe, LangSelectorComponent],
})
export class HeaderComponent {
  protected readonly links: NavLink[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT_ME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'technologies', label: 'TECHNOLOGIES' },
    { id: 'contact', label: 'CONTACT' },
  ];
}

import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import {
  getInitialLanguage,
  isSupportedLang,
  Language,
} from '@core/services/transloco/transloco.model';
import { UpperCasePipe } from '@angular/common';

interface LangOption {
  id: Language;
  label: string;
}

const LANGUAGE_LABELS: Record<Language, string> = {
  es: 'SPANISH',
  en: 'ENGLISH',
};

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  imports: [TranslocoPipe, UpperCasePipe],
})
export class LangSelectorComponent {
  private readonly translocoService = inject(TranslocoService);
  private readonly elementRef = inject(ElementRef);

  protected readonly languages: readonly LangOption[] = Object.entries(LANGUAGE_LABELS).map(
    ([id, label]) => ({ id: id as Language, label }),
  );

  protected readonly currentLang = signal(getInitialLanguage());
  protected readonly isOpen = signal(false);

  constructor() {
    this.initLanguage();
  }

  @HostListener('document:click', ['$event'])
  protected onClickOutside(event: MouseEvent): void {
    if (this.elementRef.nativeElement.contains(event.target)) return;
    this.isOpen.set(false);
  }

  protected toggleDropdown(): void {
    this.isOpen.update((open) => !open);
  }

  protected selectLanguage(language: Language): void {
    if (!isSupportedLang(language)) return;
    this.setLanguage(language);
    this.isOpen.set(false);
  }

  private initLanguage(): void {
    const initialLanguage = getInitialLanguage();
    this.setLanguage(initialLanguage);
  }

  private setLanguage(language: Language): void {
    this.currentLang.set(language);
    this.translocoService.setActiveLang(language);
    localStorage.setItem('user_lang', language);
  }
}

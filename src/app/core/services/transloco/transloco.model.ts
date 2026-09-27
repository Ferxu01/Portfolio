import { getBrowserLang } from '@jsverse/transloco';

export const availableLangs = ['es', 'en'] as const;
export const defaultLang: Language = 'es';
export type Language = (typeof availableLangs)[number];

export const isSupportedLang = (lang: string | null | undefined): lang is Language => {
  if (!lang) return false;
  return (availableLangs as readonly string[]).includes(lang);
};

export const getInitialLanguage = (): Language => {
  const savedLang = localStorage.getItem('user_lang');
  if (isSupportedLang(savedLang)) return savedLang;

  const browserLang = getBrowserLang();
  if (isSupportedLang(browserLang)) return browserLang;

  return defaultLang;
};

import { Language } from '@/context/LanguageContext';
import { Theme } from '@/context/ThemeContext';
import { cookies } from 'next/headers';

export async function getTheme() {
  const cookieStore = await cookies();
  return cookieStore.get('theme')?.value || 'light' as Theme;
}

export async function getLanguage() {
  const cookieStore = await cookies();
  return cookieStore.get('language')?.value || 'ko' as Language;
}

export async function getCookies() {
  const cookieStore = await cookies();
  return {
    theme: cookieStore.get('theme')?.value || 'light',
    language: cookieStore.get('language')?.value || 'ko'
  };
}

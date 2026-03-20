import { cookies } from 'next/headers';

export async function getTheme() {
  const cookieStore = await cookies();
  return cookieStore.get('theme')?.value || 'light';
}

export async function getLanguage(): Promise<'ko' | 'en'> {
  const cookieStore = await cookies();
  const language = cookieStore.get('language')?.value || 'ko';
  return language as 'ko' | 'en';
}

export async function getCookies() {
  const cookieStore = await cookies();
  return {
    theme: cookieStore.get('theme')?.value || 'light',
    language: cookieStore.get('language')?.value || 'ko'
  };
}

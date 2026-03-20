import { cookies } from 'next/headers';

export async function getTheme() {
  const cookieStore = await cookies();
  return cookieStore.get('theme')?.value || 'light';
}

export async function getLanguage() {
  const cookieStore = await cookies();
  return cookieStore.get('language')?.value || 'ko';
}

export async function getCookies() {
  const cookieStore = await cookies();
  return {
    theme: cookieStore.get('theme')?.value || 'light',
    language: cookieStore.get('language')?.value || 'ko'
  };
}

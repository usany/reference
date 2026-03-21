import { getLanguage } from './hooks/useServerTheme';
import { redirect } from 'next/navigation';

export default async function RootPage() {
  const language = await getLanguage();
  
  // Redirect to the appropriate language route
  redirect(`/${language}`);
}

import TopBar from '@/components/TopBar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { LanguageProvider } from '@/app/context/LanguageContext';
import { ThemeProvider } from '@/app/context/ThemeContext';
import MuiThemeProvider from '@/components/MuiThemeProvider';
import QueryProvider from '@/components/QueryProvider';
import Script from 'next/script';
import type { Metadata } from 'next';
import { getCookies } from './hooks/useServerTheme';
import './globals.css';

export const metadata: Metadata = {
  title: 'KHUSAN',
  description: 'Documentation for KHUSAN',
  icons: {
    icon: '/faviconImage.png',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme, language } = await getCookies();
  return (
    <html lang={language} className={theme} data-theme={theme}>
      <body>
        <AppRouterCacheProvider>
          <LanguageProvider initialLanguage={language as 'ko' | 'en'}>
            <ThemeProvider initialTheme={theme as 'light' | 'dark'}>
              <MuiThemeProvider>
                <QueryProvider>
                  <TopBar />
                  <main>
                    {children}
                  </main>
                </QueryProvider>
              </MuiThemeProvider>
            </ThemeProvider>
          </LanguageProvider>
        </AppRouterCacheProvider>

        <Script
          src="https://open.spotify.com/embed/iframe-api/v1"
          async
        />
        <Script
          src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=yi6uxw634q&language=en"
        />
      </body>
    </html>
  );
}

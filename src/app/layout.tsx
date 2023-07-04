'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import CookieBanner from './components/CookieBanner';
import GoogleAnalytics from './components/GoogleAnalytics';
import { DashboardProvider } from './context/DashboardContext';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_ID || 'G-W35E5JYG51'}
      />
      <body>
        <ChakraProvider>
          <CacheProvider>
            <DashboardProvider>{children}</DashboardProvider>
          </CacheProvider>
          <CookieBanner />
        </ChakraProvider>
      </body>
    </html>
  );
}

'use client';

import { ReactNode } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
import { DashboardProvider } from './context/DashboardContext';
import GoogleAnalytics from './components/GoogleAnalytics';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_ID || ''} />
      <head />
      <body>
        <CacheProvider>
          <DashboardProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </DashboardProvider>
        </CacheProvider>
      </body>
    </html>
  );
}

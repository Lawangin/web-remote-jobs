'use client';

import { ReactNode } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
import { DashboardProvider } from './context/DashboardContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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

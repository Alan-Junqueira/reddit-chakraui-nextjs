'use client';

import { theme } from '@/chakra/theme';
import { Footer } from '@/components/partials/Footer';
import { NavBar } from '@/components/partials/NavBar';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <NavBar />
            {children}
            <Footer />
            </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}

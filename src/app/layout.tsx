'use client';

import { SessionProvider } from 'next-auth/react';
import 'styles/globals.scss';
import 'styles/main.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aside from '../components/Aside';
import { Session } from 'next-auth';

export default function RootLayout({
  children,
  ...pageProps
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <SessionProvider session={pageProps.session}>
      <html lang='en'>
        <head>
          <title>Movie Web</title>
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <meta name='description' content='movie recommend web' />
        </head>
        <body>
          <header>
            <Header />
          </header>
          <Aside />
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </SessionProvider>
  );
}

//_app.js

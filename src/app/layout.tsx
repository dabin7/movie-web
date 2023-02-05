import 'styles/globals.scss';
import 'styles/main.scss';
import Header from '../components/Header';
import MainNav from '../components/MainNav/movie';
import Footer from '../components/Footer';
import Aside from '../components/Aside';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}

//_app.js

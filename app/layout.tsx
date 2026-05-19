import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>

        <Script
          defer
          data-domain="akcizur.github.io"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}

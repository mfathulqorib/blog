import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css";
import ThemeProvider from "@/theme/theme-provider";
import { baseUrl } from "@/sitemap";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'mfathulqorib',
    template: '%s | mfathulqorib',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes : any) => classes.filter(Boolean).join(' ')


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className={cx(
      'text-black bg-white dark:text-white dark:bg-black',
      GeistSans.variable,
      GeistMono.variable
    )}
    suppressHydrationWarning>
      <body
        className="antialiased max-w-2xl mx-4 lg:mx-auto"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navbar/>
            {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}

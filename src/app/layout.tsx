import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sabur PWM',
  description: 'In a financial industry primarily driven by sales tactics, Sabur Private Wealth is the authentic fiduciary you can trust.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

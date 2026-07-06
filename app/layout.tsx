import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Auth0Provider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VehicleVariations.com • Snap Your Vehicle • Forge Endless Variations',
  description: 'Upload your car photo • Browse real customizations • See realistic 3D previews on your exact vehicle. Perfect for tuners in Cape Coral & beyond.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Auth0Provider>{children}</Auth0Provider>
      </body>
    </html>
  );
}
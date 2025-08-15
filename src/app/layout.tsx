import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tailwind hue',
  description: 'Generate custom tailwind colors based on any hue value',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

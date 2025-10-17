import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dashboard | Juspay Analytics',
  description: 'An analytics and management dashboard for Juspay assessment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-background text-foreground font-inter')}>{children}</body>
    </html>
  );
}

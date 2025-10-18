import LeftSidebar from '@/components/layout/left-sidebar/LeftSidebar';
import Navbar from '@/components/layout/navigation/Navbar';
import { cn } from '@/lib/utils';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn('mx-auto flex w-full flex-1 flex-col overflow-hidden  md:flex-row', 'h-screen')}
    >
      <LeftSidebar />
      <div className="min-h-screen w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

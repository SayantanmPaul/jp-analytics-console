'use client';

import { useContextStore } from '@/lib/store';
import { useEffect } from 'react';

const Dashboard = () => {
  const { setIsMobileView, isMobileView, setRightSidebarOpen, setLeftSidebarOpen } =
    useContextStore();

  // handle viewport resize to set mobile view state
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobileView]);

  // close sidebars on mobile view
  useEffect(() => {
    if (isMobileView) {
      setRightSidebarOpen(false);
      setLeftSidebarOpen(false);
    }
  }, [isMobileView, setRightSidebarOpen, setLeftSidebarOpen]);

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen gap-4 w-full h-full">
      <h1 className=" font-normal text-xl leading-5 space-y-3 font-inter">
        Juspay Analytics Dashboard
      </h1>
    </div>
  );
};

export default Dashboard;

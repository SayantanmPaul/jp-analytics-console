'use client';

import KpiCardContainer from '@/components/dashboard/KpiCardContainer';
import ProjectionsChartCard from '@/components/dashboard/ProjectionsChartCard';
import DashboardHeader from '@/components/shared/Header';
import { useContextStore } from '@/lib/store';
import { useEffect } from 'react';
import { useGetProjectionsBarChartData } from '../../../api/apiClient';

const Dashboard = () => {
  const { setIsMobileView, isMobileView, setRightSidebarOpen, setLeftSidebarOpen } =
    useContextStore();

  const { data: barChartData } = useGetProjectionsBarChartData();

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
    <div className=" flex flex-col items-start justify-start min-h-screen gap-4 w-full h-full p-7">
      <DashboardHeader label="eCommerce" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 w-full ">
        <KpiCardContainer />
        <ProjectionsChartCard data={barChartData} />
      </div>
    </div>
  );
};

export default Dashboard;

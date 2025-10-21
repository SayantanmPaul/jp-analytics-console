'use client';

import GlobalRevenueMap from '@/components/dashboard/GlobalRevenueMap';
import KpiCardContainer from '@/components/dashboard/KpiCardContainer';
import ProjectionsChartCard from '@/components/dashboard/ProjectionsChartCard';
import RevenueForecastChart from '@/components/dashboard/RevenueChart';
import TopSellingProductsTable from '@/components/dashboard/TopSellingProductsTable';
import TotalSalesCard from '@/components/dashboard/TotalSalesCard';
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
    <div className="flex flex-col items-start justify-start min-h-screen gap-4 w-full h-full p-7">
      <DashboardHeader label="eCommerce" />

      <div className="grid grid-cols-1 gap-7 w-full lg:grid-cols-4">
        <div className="lg:col-span-2">
          <KpiCardContainer />
        </div>
        <div className="lg:col-span-2">
          <ProjectionsChartCard data={barChartData} />
        </div>
        <div className="lg:col-span-3">
          <RevenueForecastChart />
        </div>
        <GlobalRevenueMap />
        <div className="lg:col-span-3">
          <TopSellingProductsTable />
        </div>
        <TotalSalesCard />
      </div>
    </div>
  );
};

export default Dashboard;

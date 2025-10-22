import {
  CityRevenueData,
  KpiCardProps,
  LineChartData,
  NotificationsProps,
  OrdersProps,
  ProjectionData,
  projectionsBarChartData,
  sampleCityRevenue,
  sampleKPIs,
  sampleNotifications,
  sampleOrderList,
  sampleRevenuueData,
  sampleTopProducts,
  sampleTotalSales,
  sampleUserActivities,
  sampleUsers,
  TopProductsProps,
  TotalSalesProps,
  User,
  UserActivitiesProps,
} from '@/data/sample-data';
import { useEffect, useState } from 'react';

// mock data simulation for notifications
export const useGetNotifications = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<NotificationsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setData(sampleNotifications);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

// mock data simulation for user activities
export const useGetUserActivities = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<UserActivitiesProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setData(sampleUserActivities);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

// mock data simulation for user
export const useGetUsers = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 700));
        setData(sampleUsers);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

// mock data simulation for projections bar chart
export const useGetProjectionsBarChartData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ProjectionData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setData(projectionsBarChartData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

// mock data simulation for KPIs
export const useGetSampleKPIs = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<KpiCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setData(sampleKPIs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

// mock data simulation for revenue line chart
export const useSampleReveneueLineChartData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<LineChartData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 400));
        setData(sampleRevenuueData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

// mock data simulation for city revenue data
export const useGetCityRevenueData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CityRevenueData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 350));
        setData(sampleCityRevenue);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

// mock data simulation for top products
export const useGetTopProductsList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TopProductsProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setData(sampleTopProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

// mock data simulation for total sales
export const useGetTotalSales = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TotalSalesProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 550));
        setData(sampleTotalSales);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

// mock data simulation for orders
export const useGetMockOrders = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<OrdersProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        setData(sampleOrderList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

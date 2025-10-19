import {
  KpiCardProps,
  NotificationsProps,
  ProjectionData,
  projectionsBarChartData,
  sampleKPIs,
  sampleNotifications,
  sampleUserActivities,
  sampleUsers,
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

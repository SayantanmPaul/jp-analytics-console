import {
  NotificationsProps,
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
        await new Promise((resolve) => setTimeout(resolve, 500));
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
        await new Promise((resolve) => setTimeout(resolve, 700));
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
        await new Promise((resolve) => setTimeout(resolve, 1000));
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

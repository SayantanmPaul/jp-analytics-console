import User1 from '@/assets/images/users/user_1.png';
import User10 from '@/assets/images/users/user_10.png';
import User11 from '@/assets/images/users/user_11.png';
import User2 from '@/assets/images/users/user_2.png';
import User3 from '@/assets/images/users/user_3.png';
import User4 from '@/assets/images/users/user_4.png';
import User5 from '@/assets/images/users/user_5.png';
import User6 from '@/assets/images/users/user_6.png';
import User7 from '@/assets/images/users/user_7.png';
import User8 from '@/assets/images/users/user_8.png';
import User9 from '@/assets/images/users/user_9.png';

export interface NotificationsProps {
  category: string;
  title: string;
  timeStamp: string;
}

export interface UserActivitiesProps {
  avatar: string;
  label: string;
  timeStamp: string;
}

export interface User {
  name: string;
  avatar: string;
}

export interface KpiCardProps {
  label: string;
  value: number | string;
  animationStartValue?: number;
  decimalPlace?: number;
  growth: number | string;
  color?: string;
}

export interface ProjectionData {
  month: string;
  Projections: number;
  Actuals: number;
}

export interface ProjectionLineChartData {
  month: string;
  projection: number | null;
  _areaFill: number | null;
  actual: number | null;
  actualDotted: number | null;
}

export interface LineChartData {
  currentWeekRevenueAmount: string;
  previousWeekRevenueAmount: string;
  data: ProjectionLineChartData[];
}

export interface CityRevenueData {
  city: string;
  revenue: number;
  coordinates: [number, number];
}

export interface TopProductsProps {
  product_name: string;
  price: number;
  quantity: number;
  amount: number;
}

export interface TotalSalesProps {
  name: string;
  value: number;
  fill: string;
}

export const sampleNotifications: NotificationsProps[] = [
  {
    category: 'bug',
    title: 'You have a bug that needs to be fixed',
    timeStamp: 'Just now',
  },
  {
    category: 'user',
    title: 'New user registered',
    timeStamp: '59 minutes ago',
  },
  {
    category: 'bug',
    title: 'You have a bug that needs to be fixed',
    timeStamp: '12 hours ago',
  },
  {
    category: 'brodcast',
    title: 'Andi Lane subscribed to you',
    timeStamp: 'Today, 11:59 AM',
  },
];

export const sampleUserActivities: UserActivitiesProps[] = [
  {
    avatar: User1.src,
    label: 'You have a bug that needs to be fixed',
    timeStamp: 'Just now',
  },
  {
    avatar: User2.src,
    label: 'Released a new version',
    timeStamp: '59 minutes ago',
  },
  {
    avatar: User3.src,
    label: 'Submitted a bug',
    timeStamp: '12 hours ago',
  },
  {
    avatar: User4.src,
    label: 'Modified A data in Page X',
    timeStamp: 'Today, 11:59 AM',
  },
  {
    avatar: User5.src,
    label: 'Deleted a page in Project X',
    timeStamp: 'Feb 2, 2023',
  },
];

export const sampleUsers: User[] = [
  { name: 'Natali Craig', avatar: User6.src },
  { name: 'Drew Cano', avatar: User7.src },
  { name: 'Orlando Diggs', avatar: User8.src },
  { name: 'Andi Lane', avatar: User9.src },
  { name: 'Kate Morrison', avatar: User10.src },
  { name: 'Koray Okumus', avatar: User11.src },
];

export const sampleKPIs: KpiCardProps[] = [
  {
    label: 'Customers',
    value: 3781,
    animationStartValue: 3000,
    growth: '+11.01%',
    color: '#E3F5FF',
  },
  { label: 'Orders', value: 1219, animationStartValue: 1000, growth: '-0.03%' },
  { label: 'Revenue', value: '$695', animationStartValue: 500, growth: '+15.03%' },
  {
    label: 'Growth',
    value: '30.1%',
    animationStartValue: 10.0,
    decimalPlace: 1,
    growth: '+6.08%',
    color: '#E5ECF2',
  },
];

export const projectionsBarChartData: ProjectionData[] = [
  { month: 'January', Projections: 5, Actuals: 18 },
  { month: 'February', Projections: 5, Actuals: 22 },
  { month: 'March', Projections: 5, Actuals: 18 },
  { month: 'April', Projections: 6, Actuals: 23 },
  { month: 'May', Projections: 5, Actuals: 14 },
  { month: 'June', Projections: 6, Actuals: 22 },
];

export const sampleRevenuueData: LineChartData = {
  currentWeekRevenueAmount: '$58,211',
  previousWeekRevenueAmount: '$68,768',
  data: [
    { month: 'January', projection: 10, _areaFill: 10, actual: 17, actualDotted: null },
    { month: 'February', projection: 18, _areaFill: 18, actual: 11, actualDotted: null },
    { month: 'March', projection: 16, _areaFill: 16, actual: 12, actualDotted: null },
    { month: 'April', projection: 12, _areaFill: 12, actual: 17, actualDotted: 17 },
    { month: 'May', projection: 14, _areaFill: 14, actual: null, actualDotted: 21 },
    { month: 'June', projection: 24, _areaFill: 24, actual: null, actualDotted: 21 },
  ],
};

export const sampleCityRevenue: CityRevenueData[] = [
  { city: 'New York', revenue: 72, coordinates: [-74.006, 40.7128] },
  { city: 'San Francisco', revenue: 39, coordinates: [-122.4194, 37.7749] },
  { city: 'Sydney', revenue: 25, coordinates: [151.2093, -33.8688] },
  { city: 'Singapore', revenue: 61, coordinates: [103.8198, 1.3521] },
];

export const sampleTopProducts: TopProductsProps[] = [
  { product_name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
  { product_name: 'Marco Lightweight Shirt', price: 128.5, quantity: 37, amount: 4754.5 },
  { product_name: 'Half Sleeve  Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
  { product_name: 'Lightweight Jacket', price: 20.0, quantity: 184, amount: 3680.0 },
  { product_name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
];

export const sampleTotalSales: TotalSalesProps[] = [
  {
    name: 'Direct',
    value: 300.56,
    fill: 'var(--chart-1)',
  },
  {
    name: 'Affilliate',
    value: 135.18,
    fill: 'var(--chart-4)',
  },
  {
    name: 'E-mail',
    value: 48.96,
    fill: 'var(--chart-3)',
  },
  {
    name: 'Sponsored',
    value: 154.02,
    fill: 'var(--chart-2)',
  },
];

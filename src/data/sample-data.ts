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

export enum OrderStatus {
  IN_PROGRESS = 'In Progress',
  COMPLETE = 'Complete',
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export interface OrdersProps {
  id: string;
  user: {
    avatar: string;
    name: string;
  };
  project: string;
  address: string;
  date: string;
  status: OrderStatus;
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

export const sampleOrderList: OrdersProps[] = [
  {
    id: '#CM9801',
    user: {
      name: 'Natali Craig',
      avatar: User6.src,
    },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: OrderStatus.IN_PROGRESS,
  },
  {
    id: '#CM9802',
    user: {
      name: 'Kate Morrison',
      avatar: User10.src,
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: OrderStatus.COMPLETE,
  },
  {
    id: '#CM9803',
    user: {
      name: 'Drew Cano',
      avatar: User7.src,
    },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: OrderStatus.PENDING,
  },
  {
    id: '#CM9804',
    user: {
      name: 'Orlando Diggs',
      avatar: User8.src,
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: OrderStatus.APPROVED,
  },
  {
    id: '#CM9805',
    user: {
      name: 'Andi Lane',
      avatar: User9.src,
    },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: OrderStatus.REJECTED,
  },
  {
    id: '#CM9806',
    user: {
      name: 'Natali Craig',
      avatar: User6.src,
    },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: OrderStatus.IN_PROGRESS,
  },
  {
    id: '#CM9807',
    user: {
      name: 'Kate Morrison',
      avatar: User10.src,
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: OrderStatus.COMPLETE,
  },
  {
    id: '#CM9808',
    user: {
      name: 'Drew Cano',
      avatar: User7.src,
    },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: OrderStatus.PENDING,
  },
  {
    id: '#CM9809',
    user: {
      name: 'Orlando Diggs',
      avatar: User8.src,
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: OrderStatus.APPROVED,
  },
  {
    id: '#CM9810',
    user: {
      name: 'Andi Lane',
      avatar: User9.src,
    },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: OrderStatus.REJECTED,
  },
  {
    id: '#CM9811',
    user: {
      name: 'Liam Foster',
      avatar: User1.src,
    },
    project: 'E-commerce View',
    address: 'Hilltop Drive Seattle',
    date: '2 hours ago',
    status: OrderStatus.IN_PROGRESS,
  },
  {
    id: '#CM9812',
    user: {
      name: 'Sophia Bell',
      avatar: User2.src,
    },
    project: 'Portfolio Website',
    address: 'Broadway Avenue Dallas',
    date: '3 hours ago',
    status: OrderStatus.PENDING,
  },
  {
    id: '#CM9813',
    user: {
      name: 'Noah Blake',
      avatar: User3.src,
    },
    project: 'Marketing Campaign',
    address: 'Sunset Blvd Los Angeles',
    date: 'Today',
    status: OrderStatus.COMPLETE,
  },
  {
    id: '#CM9814',
    user: {
      name: 'Emma Clarke',
      avatar: User4.src,
    },
    project: 'Mobile App UI',
    address: 'Maple Street Denver',
    date: 'Oct 20, 2025',
    status: OrderStatus.REJECTED,
  },
  {
    id: '#CM9815',
    user: {
      name: 'Lucas Knight',
      avatar: User5.src,
    },
    project: 'Analytics Dashboard',
    address: 'Pine Avenue Austin',
    date: 'Last week',
    status: OrderStatus.APPROVED,
  },
  {
    id: '#CM9816',
    user: {
      name: 'Chloe Harper',
      avatar: User2.src,
    },
    project: 'Social Media',
    address: 'Bay Street Toronto',
    date: 'Oct 19, 2025',
    status: OrderStatus.COMPLETE,
  },
  {
    id: '#CM9817',
    user: {
      name: 'Mason Hill',
      avatar: User3.src,
    },
    project: 'React Native App',
    address: 'Cedar Road Atlanta',
    date: '4 hours ago',
    status: OrderStatus.IN_PROGRESS,
  },
  {
    id: '#CM9818',
    user: {
      name: 'Ava Simmons',
      avatar: User4.src,
    },
    project: 'Event Management',
    address: 'Willow Lane Chicago',
    date: '3 days ago',
    status: OrderStatus.APPROVED,
  },
  {
    id: '#CM9819',
    user: {
      name: 'Ethan Wright',
      avatar: User5.src,
    },
    project: 'Booking Platform',
    address: 'Ashwood Drive Phoenix',
    date: 'Last month',
    status: OrderStatus.REJECTED,
  },
  {
    id: '#CM9820',
    user: {
      name: 'Isabella Green',
      avatar: User1.src,
    },
    project: 'Finance Tracker',
    address: 'Elm Street Miami',
    date: '2 days ago',
    status: OrderStatus.PENDING,
  },
  {
    id: '#CM9821',
    user: {
      name: 'Mila Thompson',
      avatar: User1.src,
    },
    project: 'Travel Blog Design',
    address: 'Ocean Drive Miami',
    date: '2 days ago',
    status: OrderStatus.COMPLETE,
  },
  {
    id: '#CM9822',
    user: {
      name: 'Jackson Lee',
      avatar: User2.src,
    },
    project: 'Fitness App UI',
    address: 'King Street Toronto',
    date: '5 minutes ago',
    status: OrderStatus.IN_PROGRESS,
  },
  {
    id: '#CM9823',
    user: {
      name: 'Scarlett Evans',
      avatar: User3.src,
    },
    project: 'Real Estate Platform',
    address: 'Baker Street London',
    date: 'Oct 15, 2025',
    status: OrderStatus.APPROVED,
  },
  {
    id: '#CM9824',
    user: {
      name: 'Elijah Brooks',
      avatar: User4.src,
    },
    project: 'Landing Page',
    address: 'Fremont Street Vegas',
    date: '1 week ago',
    status: OrderStatus.PENDING,
  },
  {
    id: '#CM9825',
    user: {
      name: 'Aria Mitchell',
      avatar: User5.src,
    },
    project: 'Resume Builder App',
    address: 'Park Avenue Manhattan',
    date: 'Just now',
    status: OrderStatus.IN_PROGRESS,
  },
  {
    id: '#CM9826',
    user: {
      name: 'Benjamin Carter',
      avatar: User6.src,
    },
    project: 'News Website',
    address: 'Jefferson Street Dallas',
    date: 'Yesterday',
    status: OrderStatus.REJECTED,
  },
  {
    id: '#CM9827',
    user: {
      name: 'Layla Scott',
      avatar: User7.src,
    },
    project: 'Job Portal UI',
    address: 'Sunrise Blvd Fort Lauderdale',
    date: 'Oct 21, 2025',
    status: OrderStatus.COMPLETE,
  },
  {
    id: '#CM9828',
    user: {
      name: 'Logan Morris',
      avatar: User8.src,
    },
    project: 'Restaurant Menu App',
    address: 'Mulberry Street New York',
    date: '3 hours ago',
    status: OrderStatus.APPROVED,
  },
  {
    id: '#CM9829',
    user: {
      name: 'Zoe Ramirez',
      avatar: User9.src,
    },
    project: 'Inventory System',
    address: 'Chestnut Street Philadelphia',
    date: 'Last month',
    status: OrderStatus.REJECTED,
  },
  {
    id: '#CM9830',
    user: {
      name: 'Carter Hughes',
      avatar: User10.src,
    },
    project: 'Freelancer Dashboard',
    address: 'Beacon Street Boston',
    date: '5 days ago',
    status: OrderStatus.PENDING,
  },
  {
    id: '#CM9831',
    user: {
      name: 'Sophie Bennett',
      avatar: User11.src,
    },
    project: 'Online Course Platform',
    address: 'Lexington Avenue NYC',
    date: 'Today',
    status: OrderStatus.IN_PROGRESS,
  },
  {
    id: '#CM9832',
    user: {
      name: 'Henry Ward',
      avatar: User1.src,
    },
    project: 'Interior Design Portfolio',
    address: 'Riverwalk San Antonio',
    date: '2 hours ago',
    status: OrderStatus.APPROVED,
  },
  {
    id: '#CM9833',
    user: {
      name: 'Luna Morgan',
      avatar: User2.src,
    },
    project: 'Pet Adoption App',
    address: 'Maple Drive Portland',
    date: '1 hour ago',
    status: OrderStatus.COMPLETE,
  },
  {
    id: '#CM9834',
    user: {
      name: 'Sebastian Rivera',
      avatar: User3.src,
    },
    project: 'Food Delivery Service',
    address: 'Main Street Salt Lake City',
    date: 'Oct 17, 2025',
    status: OrderStatus.REJECTED,
  },
  {
    id: '#CM9835',
    user: {
      name: 'Nora Wallace',
      avatar: User4.src,
    },
    project: 'Blog CMS',
    address: 'Greenwood Avenue Seattle',
    date: 'A minute ago',
    status: OrderStatus.IN_PROGRESS,
  },
  {
    id: '#CM9836',
    user: {
      name: 'Grayson Reed',
      avatar: User5.src,
    },
    project: 'SaaS Billing System',
    address: 'Vine Street Cincinnati',
    date: 'Yesterday',
    status: OrderStatus.APPROVED,
  },
  {
    id: '#CM9837',
    user: {
      name: 'Penelope James',
      avatar: User6.src,
    },
    project: 'HR Onboarding App',
    address: 'Highland Road Baton Rouge',
    date: 'Oct 20, 2025',
    status: OrderStatus.PENDING,
  },
  {
    id: '#CM9838',
    user: {
      name: 'Mateo Griffin',
      avatar: User7.src,
    },
    project: 'Gaming Landing Page',
    address: '5th Avenue Brooklyn',
    date: 'Last week',
    status: OrderStatus.REJECTED,
  },
  {
    id: '#CM9839',
    user: {
      name: 'Hazel Rivera',
      avatar: User8.src,
    },
    project: 'Music Streaming UI',
    address: 'Elmwood Drive Nashville',
    date: '3 days ago',
    status: OrderStatus.COMPLETE,
  },
  {
    id: '#CM9840',
    user: {
      name: 'Levi Simmons',
      avatar: User9.src,
    },
    project: 'Nonprofit Website',
    address: 'Willow Grove Houston',
    date: 'Oct 10, 2025',
    status: OrderStatus.APPROVED,
  },
];

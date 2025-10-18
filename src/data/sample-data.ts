import User1 from '@/assets/images/users/user_1.png';
import User2 from '@/assets/images/users/user_2.png';
import User3 from '@/assets/images/users/user_3.png';
import User4 from '@/assets/images/users/user_4.png';
import User5 from '@/assets/images/users/user_5.png';
import User6 from '@/assets/images/users/user_6.png';
import User7 from '@/assets/images/users/user_7.png';
import User8 from '@/assets/images/users/user_8.png';
import User9 from '@/assets/images/users/user_9.png';
import User10 from '@/assets/images/users/user_10.png';
import User11 from '@/assets/images/users/user_11.png';

export interface NotificationsProps {
  category: string;
  title: string;
  timeStamp: string;
}

export interface UserActivitiesProps {
  avatar: string;
  name: string;
  timeStamp: string;
}

export interface User {
  name: string;
  avatar: string;
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
    name: 'You have a bug that needs to be fixed',
    timeStamp: 'Just now',
  },
  {
    avatar: User2.src,
    name: 'Released a new version',
    timeStamp: '59 minutes ago',
  },
  {
    avatar: User3.src,
    name: 'Submitted a bug',
    timeStamp: '12 hours ago',
  },
  {
    avatar: User4.src,
    name: 'Modified A data in Page X',
    timeStamp: 'Today, 11:59 AM',
  },
  {
    avatar: User5.src,
    name: 'Deleted a page in Project X',
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

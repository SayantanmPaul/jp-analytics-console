'use client';

import { Icons } from '@/assets/icons';
import ClientImage from '@/assets/images/users/client.png';
import { Sidebar, SidebarBody } from '@/components/ui/sidebar';
import TabsClipPath, { TabsProps } from '@/components/ui/tabsclip';
import { useState } from 'react';
import UserAvatar from '../../shared/UserAvatar';
import NavigationGroup, { NavigationGroupsProps } from './NavigationGroup';
import SidebarGroupItems from './SidebarGroupItems';

const clientuser = {
  name: 'ByeWind',
  image: ClientImage.src,
};

const TAB_OPTIONS: TabsProps['TABS'] = [
  {
    name: 'Favourite',
    content: (
      <SidebarGroupItems
        items={[
          { label: 'Overview', href: '#' },
          { label: 'Projects', href: '#' },
        ]}
      />
    ),
  },
  {
    name: 'Recently',
    content: (
      <SidebarGroupItems
        items={[
          { label: 'Projects', href: '#' },
          { label: 'Documents', href: '#' },
        ]}
      />
    ),
  },
];

const DASHBOARD_NAVIGATION: NavigationGroupsProps = {
  title: 'Dashboard',
  routes: [
    {
      label: 'Default',
      childOf: 'Dashboard',
      icon: <Icons.chartPieSlice className=" w-5 h-5 " />,
      routeHref: '#',
    },
    {
      label: 'eCommerce',
      childOf: 'Dashboard',
      icon: <Icons.shoppingBagOpen className="w-5 h-5 " />,
      routeHref: '#',
      childRoutes: [
        {
          label: 'Overview',
          childOf: 'eCommerce',
          routeHref: '#',
        },
        {
          label: 'Budget',
          childOf: 'eCommerce',
          routeHref: '#',
        },
      ],
    },
    {
      label: 'Projects',
      childOf: 'Dashboard',
      icon: <Icons.folderNotch className=" w-5 h-5 " />,
      routeHref: '#',
    },
    {
      label: 'Online Courses',
      childOf: 'Dashboard',
      icon: <Icons.bookOpen className=" w-5 h-5 " />,
      routeHref: '#',
    },
  ],
};

const PAGE_NAVIGATION: NavigationGroupsProps = {
  title: 'Pages',
  defaultOpenRouteName: 'User Profile',
  routes: [
    {
      label: 'User Profile',
      childOf: 'Pages',
      icon: <Icons.identificationBadge className=" w-5 h-5 " />,
      childRoutes: [
        {
          label: 'Overview',
          childOf: 'User Profile',
          routeHref: '#',
        },
        {
          label: 'Projects',
          childOf: 'User Profile',
          routeHref: '#',
        },
        {
          label: 'Campaigns',
          childOf: 'User Profile',
          routeHref: '#',
        },
        {
          label: 'Documents',
          childOf: 'User Profile',
          routeHref: '#',
        },
        {
          label: 'Followers',
          childOf: 'User Profile',
          routeHref: '#',
        },
      ],
    },
    {
      label: 'Account',
      childOf: 'Pages',
      icon: <Icons.ientificationCard className=" w-5 h-5 " />,
      routeHref: '#',
      childRoutes: [
        {
          label: 'Overview',
          childOf: 'Account',
          routeHref: '#',
        },
        {
          label: 'Settings',
          childOf: 'Account',
          routeHref: '#',
        },
      ],
    },
    {
      label: 'Corporate',
      childOf: 'Pages',
      icon: <Icons.usersThree className=" w-5 h-5 " />,
      routeHref: '#',
      childRoutes: [
        {
          label: 'Overview',
          childOf: 'Corporate',
          routeHref: '#',
        },
        {
          label: 'Revenue',
          childOf: 'Corporate',
          routeHref: '#',
        },
      ],
    },
    {
      label: 'Blog',
      childOf: 'Pages',
      icon: <Icons.notebook className=" w-5 h-5 " />,
      routeHref: '#',
      childRoutes: [
        {
          label: 'Overview',
          childOf: 'Blog',
          routeHref: '#',
        },
        {
          label: 'Posts',
          childOf: 'Blog',
          routeHref: '#',
        },
        {
          label: 'Comments',
          childOf: 'Blog',
          routeHref: '#',
        },
      ],
    },
    {
      label: 'Social',
      childOf: 'Pages',
      icon: <Icons.chatsTeardrop className=" w-5 h-5 " />,
      routeHref: '#',
      childRoutes: [
        {
          label: 'Overview',
          childOf: 'Social',
          routeHref: '#',
        },
        {
          label: 'Messages',
          childOf: 'Social',
          routeHref: '#',
        },
        {
          label: 'Notifications',
          childOf: 'Social',
          routeHref: '#',
        },
      ],
    },
  ],
};

const LeftSidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <Sidebar open={open} setOpen={() => setOpen(!open)}>
      <SidebarBody className="justify-between" aria-label="left-rails-body">
        <div className=" flex flex-col gap-4">
          <UserAvatar user={clientuser} />
          <TabsClipPath TABS={TAB_OPTIONS} />
          <NavigationGroup
            activeRouteLabel="Default"
            routes={DASHBOARD_NAVIGATION.routes}
            title={DASHBOARD_NAVIGATION.title}
          />
          <NavigationGroup routes={PAGE_NAVIGATION.routes} title={PAGE_NAVIGATION.title} />
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default LeftSidebar;

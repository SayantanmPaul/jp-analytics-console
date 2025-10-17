'use client';

import ClientImage from '@/assets/images/users/client.png';
import { Sidebar, SidebarBody } from '@/components/ui/sidebar';
import TabsClipPath, { TabsProps } from '@/components/ui/tabsclip';
import { useState } from 'react';
import UserAvatar from '../../shared/UserAvatar';
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

const LeftSidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <Sidebar open={open} setOpen={() => setOpen(!open)}>
      <SidebarBody className="justify-between" aria-label="left-rails-body">
        <div className=" flex flex-col gap-4">
          <UserAvatar user={clientuser} />
          <TabsClipPath TABS={TAB_OPTIONS} />
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default LeftSidebar;

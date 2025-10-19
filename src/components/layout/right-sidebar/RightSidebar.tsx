'use client';

import { Sidebar, SidebarBody } from '@/components/ui/sidebar';
import { useContextStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { useGetNotifications, useGetUserActivities, useGetUsers } from '../../../../api/apiClient';
import ActivityGroup from './ActivityGroup';
import Contacts from './Contacts';
import GroupHeader from './GroupHeader';
import NotificationGroup from './NotificationGroup';

const RightSidebar = () => {
  const { rightSidebarOpen, setRightSidebarOpen } = useContextStore();

  return (
    <Sidebar
      open={rightSidebarOpen}
      setOpen={() => setRightSidebarOpen(!rightSidebarOpen)}
      side="right"
      desktopOpenWidth={280}
      desktopCloseWidth={0}
      mobileOpenWidth={320}
    >
      <SidebarBody className="justify-between " aria-label="right-rails-body">
        <motion.div
          key="tabs-clip"
          initial={false}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className=" flex flex-col gap-6 overflow-y-scroll no-scrollbar lg:p-5 md:p-3"
        >
          <NotifcationSection />
          <UserActivitySection />
          <ContactsSection />
        </motion.div>
      </SidebarBody>
    </Sidebar>
  );
};

export default RightSidebar;

const NotifcationSection = () => {
  const { data: notificationList, loading } = useGetNotifications();
  return (
    <div className=" flex flex-col space-y-2 items-start">
      <GroupHeader lable="Notifications" />
      <NotificationGroup data={notificationList} isLoading={loading} />
    </div>
  );
};

const UserActivitySection = () => {
  const { data: activityList, loading } = useGetUserActivities();
  return (
    <div className=" flex flex-col space-y-2 items-start">
      <GroupHeader lable="Activities" />
      <ActivityGroup data={activityList} isLoading={loading} />
    </div>
  );
};

const ContactsSection = () => {
  const { data: users, loading } = useGetUsers();
  return (
    <div className=" flex flex-col space-y-2 items-start">
      <GroupHeader lable="Contacts" />
      <Contacts data={users} isLoading={loading} />
    </div>
  );
};

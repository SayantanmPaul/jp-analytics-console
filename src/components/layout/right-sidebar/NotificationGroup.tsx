import { Icons } from '@/assets/icons';
import { Skeleton } from '@/components/ui/skeleton';
import { NotificationsProps } from '@/data/sample-data';
import Link from 'next/link';

const NotificationGroup = ({
  data,
  isLoading,
}: {
  data: NotificationsProps[];
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 w-full" role="region">
      {isLoading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <NotificationSkeleton key={`skeleton-${index}`} />
        ))
      ) : data?.length > 0 ? (
        data.map((notification) => (
          <NotificationCard
            key={`${notification.title}-${notification.timeStamp}`}
            {...notification}
          />
        ))
      ) : (
        <div className="text-sm text-black-40 italic p-2" role="status">
          No notifications available.
        </div>
      )}
    </div>
  );
};

export default NotificationGroup;

const NotificationCard = ({ category, timeStamp, title }: NotificationsProps) => {
  return (
    <Link
      href="#"
      aria-label={`Notification: ${title}`}
      className="p-1 flex space-x-2 items-start max-w-56 w-full group "
    >
      <span
        className="max-w-6 max-h-6 size-full bg-[#E3F5FF] group-hover:bg-[#a8c5da]/40 dark:group-hover:bg-[#a8c5da] rounded-sm flex items-center justify-center duration-200 ease-in-out "
        aria-hidden="true"
      >
        {category === 'bug' ? (
          <Icons.bugBeetle className="w-4 h-4 size-full text-black dark:text-primary-foreground" />
        ) : category === 'user' ? (
          <Icons.user className="w-4 h-4 size-full text-black dark:text-primary-foreground" />
        ) : (
          <Icons.broadcast className="w-4 h-4 size-full text-black dark:text-primary-foreground" />
        )}
      </span>
      <div className="space-y-0 overflow-hidden flex flex-col h-[38px]">
        <p className="text-sm leading-5 font-normal space-y-3 text-black-100 text-ellipsis truncate group-hover:font-medium ">
          {title}
        </p>
        <p className="text-xs leading-5 font-normal space-y-3 text-black-40">{timeStamp}</p>
      </div>
    </Link>
  );
};

const NotificationSkeleton = () => {
  return (
    <div
      role="status"
      aria-label="Loading notification"
      className="p-1 flex space-x-2 items-start max-w-56 w-full h-[46px]"
    >
      <div className="max-w-6 max-h-6 w-6 h-6 rounded-sm flex-shrink-0">
        <Skeleton className="w-full h-full rounded-sm" />
      </div>
      <div className="flex flex-col space-y-1 w-full overflow-hidden">
        <Skeleton className="w-full h-4.5 rounded-md" />
        <Skeleton className="w-1/3 h-3.5 rounded-md" />
      </div>
    </div>
  );
};

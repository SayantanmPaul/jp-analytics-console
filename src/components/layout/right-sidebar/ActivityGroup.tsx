import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { UserActivitiesProps } from '@/data/sample-data';
import Link from 'next/link';

const ActivityGroup = ({
  data,
  isLoading,
}: {
  data: UserActivitiesProps[];
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 w-full relative" role="region">
      {isLoading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <ActivityCardSkeleton key={`skeleton-${index}`} />
        ))
      ) : data?.length > 0 ? (
        data.map((notification) => (
          <ActivityCard {...notification} key={`${notification.label}-${notification.timeStamp}`} />
        ))
      ) : (
        <div className="text-sm text-black-40 italic p-2" role="status">
          No activity available.
        </div>
      )}
      <div
        aria-hidden="true"
        className="absolute m-auto top-1/2 -translate-y-24 left-4 h-44 -z-0">
        <div className="flex flex-col items-center gap-10 ">
          {Array.from({ length: data.length - 1 }).map((_, index) => (
            <span key={index} className="w-[1px] h-[14px] rounded-full bg-black-10" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityGroup;

const ActivityCard = ({ label, avatar, timeStamp }: UserActivitiesProps) => {
  const fallbackName = label.slice(0, 2).toUpperCase();

  return (
    <Link
      href="#"
      aria-label={`Activity: ${label}`}
      className="p-1 flex space-x-2 items-start max-w-56 w-full h-[46px]"
    >
      <Avatar role="img" className="w-6 h-6 flex-shrink-0">
        <AvatarImage src={avatar} alt={label} />
        <AvatarFallback>{fallbackName}</AvatarFallback>
      </Avatar>
      <div className="space-y-0 overflow-hidden flex flex-col h-[38px]">
        <p className="text-sm leading-5 font-normal text-black-100 text-ellipsis truncate">
          {label}
        </p>
        <p className="text-xs leading-5 font-normal text-black-40">{timeStamp}</p>
      </div>
    </Link>
  );
};

const ActivityCardSkeleton = () => {
  return (
    <div
      role="status"
      aria-label="Loading User Activity"
      className="p-1 flex space-x-2 items-start max-w-56 w-full h-[46px]"
    >
      <div className="max-w-6 max-h-6 w-6 h-6 rounded-sm flex-shrink-0">
        <Skeleton className="w-full h-full rounded-full" />
      </div>
      <div className="flex flex-col space-y-1 w-full overflow-hidden">
        <Skeleton className="w-full h-4.5 rounded-sm" />
        <Skeleton className="w-1/3 h-3.5 rounded-md" />
      </div>
    </div>
  );
};

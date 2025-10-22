import UserAvatar from '@/components/shared/UserAvatar';
import { Skeleton } from '@/components/ui/skeleton';
import { User } from '@/data/sample-data';

const Contacts = ({ data, isLoading }: { data: User[]; isLoading: boolean }) => {
  return (
    <div className="flex flex-col gap-2 w-full" role="region">
      {isLoading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <ContactCardSkeleton key={`skeleton-${index}`} />
        ))
      ) : data.length > 0 ? (
        data.map((user, i) => (
          <span key={`${user.name}- ${i}`} className="cursor-pointer w-full">
            <UserAvatar user={{ image: user.avatar, name: user.name }} />
          </span>
        ))
      ) : (
        <div className="text-sm text-black-40 italic p-2" role="status">
          No contacts available.
        </div>
      )}
    </div>
  );
};

export default Contacts;

const ContactCardSkeleton = () => {
  return (
    <div
      role="status"
      aria-label="Loading Contacts"
      className="flex flex-1 items-center space-x-2 p-1"
    >
      <Skeleton className="w-6 h-6 rounded-full flex-shrink-0" />
      <Skeleton className="w-1/2 h-4 rounded-sm flex-shrink-0" />
    </div>
  );
};

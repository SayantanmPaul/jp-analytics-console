import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface UserAvatarProps {
  user: {
    name: string;
    image: string | StaticImageData;
  };
  className?: string;
}

const UserAvatar = ({ user, className }: UserAvatarProps) => {
  const fallbackName = user.name.slice(0, 2).toUpperCase();
  const imageUrl = typeof user.image === 'string' ? user.image : user.image.src;

  return (
    <div
      role="group"
      aria-labelledby={`user-name-${user.name}`}
      className={` flex flex-1 items-center space-x-2 p-1 `}
    >
      <Avatar role="img" className="w-6 h-6">
        <AvatarImage src={imageUrl} aria-hidden="true" />
        <AvatarFallback>{fallbackName}</AvatarFallback>
      </Avatar>
      <p
        id={`user-name-${user.name}`}
        className={cn('font-normal text-sm leading-5 text-nowrap', className)}
      >
        {user.name}
      </p>
    </div>
  );
};

export default UserAvatar;

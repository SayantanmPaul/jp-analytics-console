import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface UserAvatarProps {
  user: {
    name: string;
    image: string | StaticImageData;
  };
}

const UserAvatar = ({ user }: UserAvatarProps) => {
  const fallbackName = user.name.slice(0, 1);
  const imageUrl = typeof user.image === 'string' ? user.image : user.image.src;

  return (
    <div role="group" className="flex flex-1 items-center space-x-2 p-1  ">
      <Avatar role="img" className="w-6 h-6">
        <AvatarImage src={imageUrl} alt={user.name} />
        <AvatarFallback>{fallbackName}</AvatarFallback>
      </Avatar>
      <p className={cn('font-normal text-sm leading-5 ')}>{user.name}</p>
    </div>
  );
};

export default UserAvatar;

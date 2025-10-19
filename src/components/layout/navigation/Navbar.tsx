'use client';

import { Icons } from '@/assets/icons';
import ThemeToggle from '@/components/shared/ThemeToggle';
import { Button } from '@/components/ui/button';
import { useContextStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import NavigationPath from './NavigationPath';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <header
      role="banner"
      aria-label="Site header"
      className={cn(
        'bg-transparent border-b border-black-10 sticky top-0 z-40 w-full backdrop-blur-sm h-[68px]',
      )}
    >
      <div className="flex w-full items-center justify-between px-7 py-5 ">
        <LeftNavControls />
        <RightUtilityControls />
      </div>
    </header>
  );
};

export default Navbar;

const LeftNavControls = () => {
  const { leftSidebarOpen, setLeftSidebarOpen } = useContextStore();

  const toggleSidebar = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
  };

  return (
    <nav aria-label="Primary" className="flex space-x-2 items-center ">
      <span className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="w-7 h-7 cursor-pointer"
          aria-label="Toggle left sidebar"
          title="Toggle left sidebar"
          onClick={toggleSidebar}
        >
          <Icons.sidebar className=" w-5 h-5 size-full " />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className=" w-7 h-7 cursor-pointer"
          aria-label="Add to favorites"
          title="Add to favorites"
        >
          <Icons.star aria-hidden="true" className=" w-5 h-5 size-full" />
        </Button>
      </span>
      <NavigationPath />
    </nav>
  );
};

const RightUtilityControls = () => {
  const { rightSidebarOpen, setRightSidebarOpen } = useContextStore();

  const toggleSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
  };
  return (
    <nav aria-label="Secondary" className="flex space-x-5 items-center">
      <SearchBar />
      <span className="flex items-center gap-2 ">
        <ThemeToggle />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="w-7 h-7 cursor-pointer"
          aria-label="Toggle refresh"
          title="Toggle refresh"
        >
          <Icons.clockCounterClockwise className=" w-5 h-5 size-full text-black" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="w-7 h-7 cursor-pointer"
          aria-label="Notifications"
          title="Notifications"
        >
          <Icons.bell className=" w-5 h-5 size-full text-black" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="w-7 h-7 cursor-pointer"
          aria-label="Toggle right sidebar"
          title="Toggle right sidebar"
          onClick={toggleSidebar}
        >
          <Icons.sidebar className=" w-5 h-5 size-full text-black" />
        </Button>
      </span>
    </nav>
  );
};

'use client';

import LeftSidebar from '@/components/layout/left-sidebar/LeftSidebar';
import Navbar from '@/components/layout/navigation/Navbar';
import SearchBar from '@/components/layout/navigation/SearchBar';
import RightSidebar from '@/components/layout/right-sidebar/RightSidebar';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div
      className={cn(
        'mx-auto flex w-full flex-1 flex-col overflow-hidden overflow-y-hidden  md:flex-row',
        'h-screen',
      )}
    >
      <LeftSidebar />
      <div className="min-h-screen w-full flex flex-col items-center">
        <Navbar />
        <Empty>
          <EmptyHeader>
            <EmptyTitle>404 - Not Found</EmptyTitle>
            <EmptyDescription>
              The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need
              below.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <SearchBar
              initialValue=""
              maxWidth={240}
              shortcutKey="cmd+k"
              containerClass="h-8"
              onSearchChange={() => {}}
            />
          </EmptyContent>
        </Empty>
      </div>
      <RightSidebar />
    </div>
  );
}

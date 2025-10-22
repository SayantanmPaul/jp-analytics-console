'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export interface TabsProps {
  TABS: {
    name: string;
    content: React.ReactNode;
  }[];
}

const TabsClipPath = ({ TABS }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(TABS[0].name);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabElementRef = useRef<HTMLButtonElement | null>(null);

  // update the clip path wwhen active tab change
  useEffect(() => {
    const container = containerRef.current;
    const activeTabElement = activeTabElementRef.current;

    if (!container || !activeTabElement) return;

    const updateClipPath = () => {
      const { offsetLeft, offsetWidth } = activeTabElement;
      const clipLeft = offsetLeft;
      const clipRight = offsetLeft + offsetWidth;

      // update the clip path of the container div
      container.style.clipPath = `inset(0 ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% 0 ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}%)`;
    };

    requestAnimationFrame(updateClipPath);
  }, [activeTab]);

  // content of the active tab
  const activeContent = TABS.find((tab) => tab.name === activeTab)?.content;

  return (
    <div role="tablist" aria-label="Tab navigation" className="space-y-1 pb-3">
      <div className=" relative w-fit flex flex-col items-center ">
        {/* all tab list */}
        <ul
          role="tablist"
          aria-label="Tab navigation"
          className=" relative flex w-full justify-center gap-2"
        >
          {TABS.map((tab) => (
            <li role="presentation" key={tab.name}>
              <button
                role="tab"
                id={`tab-${tab.name}`}
                aria-controls={`tabpanel-${tab.name}`}
                aria-selected={activeTab === tab.name}
                ref={activeTab === tab.name ? activeTabElementRef : null}
                onClick={() => setActiveTab(tab.name)}
                className={cn('flex text-sm leading-5 text-black-20 py-1 px-2')}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
        {/* Clip-path background to view active tabs */}
        <div
          aria-hidden="true"
          className="clip-path-container pointer-events-none"
          ref={containerRef}
        >
          <div className="relative flex w-full justify-center gap-2">
            {TABS.map((tab) => (
              <div key={tab.name} className="text-sm leading-5 text-black-40 py-1 px-2 ">
                {tab.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tab panel content */}
      <div
        key={activeTab}
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="w-full flex flex-1"
      >
        {activeContent}
      </div>
    </div>
  );
};

export default TabsClipPath;

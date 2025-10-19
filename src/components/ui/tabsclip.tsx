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
  const activeTabElementRef = useRef(null);

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
        <ul className=" relative flex w-full justify-center gap-2">
          {TABS.map((tab) => (
            <li key={tab.name}>
              <button
                ref={activeTab === tab.name ? activeTabElementRef : null}
                data-tab={tab.name}
                onClick={() => {
                  setActiveTab(tab.name);
                }}
                role="tab"
                className={cn(
                  'flex text-sm leading-5 text-black-20 py-1 px-2',
                  activeTab === tab.name && '',
                )}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
        <div aria-hidden className="clip-path-container" ref={containerRef}>
          <ul className="relative flex w-full justify-center gap-2">
            {TABS.map((tab) => (
              <li key={tab.name}>
                <button
                  data-tab={tab.name}
                  aria-selected={activeTab === tab.name}
                  role="tab"
                  onClick={() => {
                    setActiveTab(tab.name);
                  }}
                  className="text-sm leading-5 text-black-40 py-1 px-2 w-full"
                  tabIndex={-1}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div key={activeTab} className="w-full flex flex-1">
        {activeContent}
      </div>
    </div>
  );
};

export default TabsClipPath;

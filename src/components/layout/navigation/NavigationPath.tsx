'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface BreadCrumbProps {
  label: string;
  href?: string;
}

const NavigationPath = () => {
  const currentPath = usePathname();
  const segments = currentPath.split('/').filter(Boolean);

  const formatLable = (label: string) => {
    return label.charAt(0).toUpperCase() + label.slice(1);
  };

  // Build breadcrumb items dynamically
  const breadCrumps: BreadCrumbProps[] =
    currentPath === '/'
      ? [
          { label: 'Dashboards', href: '' },
          { label: 'Default', href: '/' },
        ]
      : [
          { label: 'Dashboards', href: '/' },
          ...segments.map((item, i) => ({
            label: formatLable(item),
            href: `/${segments.slice(0, i + 1).join('/')}`,
          })),
        ];

  return (
    <Breadcrumb aria-label="Breadcrumb">
      <BreadcrumbList>
        {breadCrumps.map((item, i) => (
          <React.Fragment key={i}>
            <BreadcrumbItem
              className={cn(
                `text-sm leading-5 font-normal px-2 py-1 ${item.href === currentPath ? 'text-black-100' : 'text-black-40 dark:text-black-20'}`,
              )}
              aria-current={item.href === currentPath ? 'page' : undefined}
            >
              {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            </BreadcrumbItem>
            {i < breadCrumps.length - 1 && (
              <BreadcrumbSeparator className="text-black-20">/</BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavigationPath;

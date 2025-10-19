import { Icons } from '@/assets/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useContextStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useId, useState } from 'react';

export interface NavigationGroupsProps {
  title: string;
  activeRouteLabel?: string;
  defaultOpenRouteName?: string;
  routes: NavigationGroup[];
}

interface NavigationGroup {
  label: string;
  icon?: React.JSX.Element | React.ReactNode;
  routeHref?: string;
  childOf: string;
  childRoutes?: NavigationGroup[];
}

interface NavigationRoutesProps extends NavigationGroup {
  defaultOpenRouteName?: string;
  activeRouteLabel?: string;
}

const NavigationGroup = ({
  title,
  routes,
  activeRouteLabel,
  defaultOpenRouteName,
}: NavigationGroupsProps) => {
  const { leftSidebarOpen } = useContextStore();
  return (
    <nav aria-label={title}>
      <div className="space-y-1 pb-3">
        <div className="py-1 px-3">
          <h3
            className={`text-black-40 text-sm leading-5 space-y-3 font-normal flex flex-1 ${!leftSidebarOpen ? 'hidden' : 'block'} `}
          >
            {title}
          </h3>
        </div>
        <Accordion type="single" collapsible className="w-full" defaultValue={defaultOpenRouteName}>
          <ul role="list" className="space-y-1">
            {routes.map((route) => (
              <li key={route.label}>
                <NavigationRoutes
                  key={route.label}
                  {...route}
                  activeRouteLabel={activeRouteLabel}
                  defaultOpenRouteName={defaultOpenRouteName}
                />
              </li>
            ))}
          </ul>
        </Accordion>
      </div>
    </nav>
  );
};

export default NavigationGroup;

const NavigationRoutes = ({
  label,
  icon,
  routeHref,
  activeRouteLabel,
  childRoutes,
}: NavigationRoutesProps) => {
  const [active, setActive] = useState<boolean>(false);
  const { leftSidebarOpen, setLeftSidebarOpen } = useContextStore();

  const isLeafNode = !icon && !childRoutes?.length;
  const isActive = activeRouteLabel === label;
  const id = useId();

  const handleClick = () => {
    if (!leftSidebarOpen) {
      setLeftSidebarOpen(true);
    }
    setActive((prev) => !prev);
  };

  if (isLeafNode && routeHref) {
    return (
      <Link
        href={routeHref}
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          'flex items-center gap-2 py-1 px-2 rounded-md transition-colors cursor-pointer',
          isActive
            ? 'text-black-40 bg-black-5 dark:bg-black-5'
            : 'text-black-100 hover:bg-black-5 hover:dark:bg-black-5',
        )}
      >
        <span className="w-4 h-4" />
        <span className="w-5 h-5" />
        <motion.p
          className="text-sm leading-5 text-nowrap origin-left"
          initial={false}
          animate={{
            opacity: leftSidebarOpen ? 1 : 0,
            width: leftSidebarOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.16 }}
          aria-hidden={!leftSidebarOpen}
        >
          {label}
        </motion.p>
      </Link>
    );
  }

  return (
    <AccordionItem value={label} className="border-none">
      <AccordionTrigger
        onClick={handleClick}
        className={cn(
          'flex items-center py-1 flex-1 transition-colors duration-200 rounded-md',
          isActive ? 'bg-black-5 dark:bg-black-5' : 'hover:bg-black-5 hover:dark:bg-black-5',
          !leftSidebarOpen ? 'gap-0 justify-center' : 'gap-2 justify-start',
        )}
      >
        <span className="pl-2 relative flex items-center" aria-hidden="true">
          {/* active tab indicator */}
          <span
            className={cn(
              `w-1 h-4 rounded-full bg-foreground absolute left-0 ${!leftSidebarOpen && !isActive && 'hidden'} ${isActive ? 'opacity-100' : 'opacity-0'}`,
            )}
          />
          {leftSidebarOpen && (
            <Icons.arrowLineRight
              aria-hidden="true"
              className={cn(
                `w-4 h-4 translate-y-0.5 transition-transform duration-200 mb-1  ${active ? 'rotate-90' : ''} ${isActive ? 'opacity-0' : 'opacity-100'} `,
              )}
            />
          )}
        </span>

        {/* icon and label */}
        <span
          className={cn(
            'flex items-center gap-2 text-black-100 font-normal transition-all duration-300 flex-1 min-w-0',
            !leftSidebarOpen && 'gap-0',
          )}
        >
          {icon && (
            <span aria-hidden="true" className="w-5 h-5 shrink-0">
              {icon}
            </span>
          )}
          <motion.p
            className="text-sm leading-5 text-nowrap truncate origin-left"
            initial={false}
            animate={{
              opacity: leftSidebarOpen ? 1 : 0,
              width: leftSidebarOpen ? 'auto' : 0,
            }}
            transition={{ duration: 0.16 }}
            aria-hidden={!leftSidebarOpen}
          >
            {label}
          </motion.p>
        </span>
      </AccordionTrigger>

      {/* child routes */}
      {childRoutes && childRoutes.length > 0 && leftSidebarOpen && (
        <AccordionContent asChild className="pt-1 data-[state=closed]:overflow-hidden">
          <motion.ul
            initial={false}
            animate={{
              height: leftSidebarOpen ? 'auto' : 0,
              opacity: leftSidebarOpen ? 1 : 0,
            }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="space-y-1"
          >
            {childRoutes.map((route, i) => (
              <li key={`${id ?? label}::${route.label}`}>
                <NavigationRoutes key={i} childRoutes={route.childRoutes} {...route} />
              </li>
            ))}
          </motion.ul>
        </AccordionContent>
      )}
    </AccordionItem>
  );
};

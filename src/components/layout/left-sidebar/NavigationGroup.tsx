import { Icons } from '@/assets/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
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
  return (
    <nav aria-label={title}>
      <div className="space-y-2">
        <div className="py-1 px-3">
          <h3 className="text-black-40 text-sm leading-5 space-y-3 flex flex-1">{title}</h3>
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

  const isLeafNode = !icon && !childRoutes?.length;
  const isActive = activeRouteLabel === label;
  const id = useId();

  const handleClick = () => setActive((prev) => !prev);

  if (isLeafNode && routeHref) {
    return (
      <Link
        href={routeHref}
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          `flex items-center space-x-1 py-1 px-2 rounded-md transition-colors cursor-pointer`,
          isActive ? ' text-black-40' : ' text-black-100',
        )}
      >
        <span className="w-4 h-4" />
        <span className="w-5 h-5" />
        <p className="text-sm leading-5">{label}</p>
      </Link>
    );
  }

  return (
    <AccordionItem value={label} className="border-none">
      <AccordionTrigger
        onClick={handleClick}
        className={cn(
          `flex space-x-1 flex-1 py-1 items-center ${isActive ? 'bg-black-5 rounded-md' : 'hover:bg-black-5 hover:rounded-md'} transition-colors duration-200`,
        )}
      >
        <span className="pl-2 relative" aria-hidden="true">
          {/* active tab indicator */}
          <span
            className={cn(
              `w-1 h-4 rounded-full bg-foreground absolute left-0 ${isActive ? 'opacity-100' : 'opacity-0'}`,
            )}
          />
          <Icons.arrowLineRight
            aria-hidden="true"
            className={cn(
              `w-4 h-4 translate-y-0.5 transition-transform duration-200 ${active ? 'rotate-90' : ''} ${isActive || !icon ? 'opacity-0' : 'opacity-100'}`,
            )}
          />
        </span>

        {/* icon and label */}
        <span className="flex gap-1 text-black-100 font-normal">
          {icon ? (
            <span aria-hidden="true" className="w-5 h-5">
              {icon}
            </span>
          ) : (
            <span className="w-5 h-5" aria-hidden="true" />
          )}
          <p className="text-sm leading-5 space-y-3">{label}</p>
        </span>
      </AccordionTrigger>

      {/* child routes */}
      {childRoutes && childRoutes.length > 0 && (
        <AccordionContent className="pt-1" asChild>
          <ul className="space-y-1">
            {childRoutes.map((route, i) => (
              <li key={`${id ?? label}::${route.label}`}>
                <NavigationRoutes key={i} childRoutes={route.childRoutes} {...route} />
              </li>
            ))}
          </ul>
        </AccordionContent>
      )}
    </AccordionItem>
  );
};

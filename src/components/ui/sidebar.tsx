'use client';

import { Icons } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Button } from './button';

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

type Side = 'left' | 'right';

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  side: Side;
  animate: boolean;
  desktopOpenWidth: number;
  desktopCloseWidth: number;
  mobileOpenWidth: number;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
  side,
  desktopOpenWidth,
  desktopCloseWidth = 0,
  mobileOpenWidth,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
  side?: Side;
  desktopOpenWidth: number;
  desktopCloseWidth: number;
  mobileOpenWidth: number;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider
      value={{
        open,
        setOpen,
        animate: animate,
        side: side || 'left',
        desktopOpenWidth,
        desktopCloseWidth,
        mobileOpenWidth,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
  side,
  desktopOpenWidth,
  desktopCloseWidth,
  mobileOpenWidth,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
  side?: Side;
  desktopOpenWidth: number;
  desktopCloseWidth: number;
  mobileOpenWidth: number;
}) => {
  return (
    <SidebarProvider
      open={open}
      setOpen={setOpen}
      animate={animate}
      side={side}
      desktopOpenWidth={desktopOpenWidth}
      desktopCloseWidth={desktopCloseWidth}
      mobileOpenWidth={mobileOpenWidth}
    >
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<'div'>)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, animate, side, desktopCloseWidth, desktopOpenWidth } = useSidebar();

  const sideBorder = side === 'left' ? 'border-r' : 'border-l';
  const sideOrder = side === 'right' ? 'md:order-last' : undefined;

  return (
    <>
      <motion.div
        role="complementary"
        data-side={side}
        initial={false}
        className={cn(
          'hidden h-full shrink-0 bg-sidebar md:flex md:flex-col',
          sideBorder,
          'border-sidebar-border',
          sideOrder,
          `w-[${desktopOpenWidth}px]`,
          className,
        )}
        animate={{
          width: animate
            ? open
              ? `${desktopOpenWidth}px`
              : `${desktopCloseWidth}px`
            : `${desktopOpenWidth}px`,
        }}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
  const { open, setOpen, side, mobileOpenWidth } = useSidebar();

  const initialX = side === 'left' ? '-100%' : '100%';
  const exitX = initialX;

  const sidePosition = side === 'left' ? 'left-0' : 'right-0';
  const panelWidth = mobileOpenWidth ?? 280;

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={cn(
        'md:hidden lg:h-10 lg:px-4 lg:py-4 relative bg-sidebar flex w-full items-center justify-between',
      )}
      {...props}
    >
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              key={`drawer-${side}`}
              initial={{ x: initialX, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: exitX, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={cn(
                'fixed top-0 bottom-0 z-[100] flex h-full flex-col bg-sidebar px-6 py-4 shadow-lg',
                sidePosition,
                className,
              )}
              style={{ width: `${panelWidth}px` }}
              aria-label="mobile-sidebar"
              role="dialog"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="w-7 h-7 cursor-pointer text-black-100 absolute right-4 top-5 z-50"
                title="Close sidebar"
              >
                <Icons.sidebar className="w-5 h-5 size-full" />
              </Button>

              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({ link, className, ...props }: { link: Links; className?: string }) => {
  const { open, animate } = useSidebar();
  return (
    <a
      href={link.href}
      className={cn('group/sidebar flex items-center justify-start gap-2 py-2', className)}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? 'inline-block' : 'none') : 'inline-block',
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="!m-0 inline-block !p-0 text-sm whitespace-pre text-neutral-700 transition duration-150 group-hover/sidebar:translate-x-1 dark:text-neutral-200"
      >
        {link.label}
      </motion.span>
    </a>
  );
};

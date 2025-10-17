'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import React, { createContext, useContext, useState } from 'react';

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
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
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
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
  const { open, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          'hidden h-full w-[212px] shrink-0 bg-sidebar pt-5 px-4 md:flex md:flex-col border-r border-sidebar-border',
          className,
        )}
        animate={{
          width: animate ? (open ? '212px' : '80px') : '212px',
        }}
        // onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          'flex w-full flex-row items-center justify-between bg-neutral-100 md:hidden lg:h-10 lg:px-4 lg:py-4 dark:bg-neutral-800',
        )}
        {...props}
      >
        {/* <Button
          variant="ghost"
          onClick={() => setOpen(!open)}
          className="absolute top-5 left-4 z-20 text-neutral-200"
        >
          <IconLayoutSidebarRightCollapseFilled
            size={20}
            className="min-h-6 min-w-6 text-neutral-800 dark:text-neutral-200"
          />
        </Button> */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className={cn(
                'fixed inset-0 z-[100] flex h-full w-full max-w-full flex-col justify-between bg-white px-6 py-4 dark:bg-neutral-900',
                className,
              )}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
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

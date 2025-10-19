import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ContextStore {
  rightSidebarOpen: boolean;
  setRightSidebarOpen: (open: boolean) => void;

  leftSidebarOpen: boolean;
  setLeftSidebarOpen: (open: boolean) => void;

  isMobileView: boolean;
  setIsMobileView: (view: boolean) => void;
}

export const useContextStore = create<ContextStore>()(
  persist(
    (set) => ({
      rightSidebarOpen: true,
      setRightSidebarOpen(open) {
        set({ rightSidebarOpen: open });
      },

      leftSidebarOpen: true,
      setLeftSidebarOpen(open) {
        set({ leftSidebarOpen: open });
      },

      isMobileView: false,
      setIsMobileView(view) {
        set({ isMobileView: view });
      }
    }),
    {
      name: 'context-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

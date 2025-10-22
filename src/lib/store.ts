import { create } from 'zustand';

export interface ContextStore {
  rightSidebarOpen: boolean;
  setRightSidebarOpen: (open: boolean) => void;

  leftSidebarOpen: boolean;
  setLeftSidebarOpen: (open: boolean) => void;

  isMobileView: boolean;
  setIsMobileView: (view: boolean) => void;
}

export const useContextStore = create<ContextStore>()((set) => ({
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
  },
}));

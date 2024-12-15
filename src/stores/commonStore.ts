import { create } from "zustand";

type CommonState = {
  drawerState: {
    open: boolean;
    header?: string;
    side?: "left" | "right";
  };
  globalDrawer: {
    open: boolean;
    header?: string;
    side?: "left" | "right";
  };
};

type CommonActions = {
  setDrawerState: (params: CommonState["drawerState"]) => void;
  setGlobalDrawer: (params: CommonState["globalDrawer"]) => void;
};

export const useCommonStore = create<CommonState & CommonActions>()((set) => ({
  drawerState: { open: false, header: undefined, side: "left" },
  globalDrawer: { open: false, header: undefined, side: "left" },

  // Update state-------------------------------------
  setDrawerState: (params) => set({ drawerState: params }),
  setGlobalDrawer: (params) => set({ globalDrawer: params }),
}));

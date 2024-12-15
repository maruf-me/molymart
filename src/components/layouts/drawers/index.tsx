"use client";

import { useCommonStore } from "@/stores/commonStore";
import { Menu } from "lucide-react";
import { Drawer } from "../../common/Drawer";
import AllCategories from "./AllCategories";
import MenuDrawer from "./MenuDrawer";

export function GlobalDrawers() {
  const drawerState = useCommonStore((state) => state.globalDrawer);
  const setDrawer = useCommonStore((state) => state.setGlobalDrawer);

  const renderedDrawers = (active: string | undefined) => {
    switch (active) {
      case "Menu":
        return <MenuDrawer />;

      case "All Categories":
        return <AllCategories />;

      default:
        return <></>;
    }
  };

  return (
    <Drawer
      side="left"
      open={drawerState.open}
      onClose={(open) => setDrawer({ open })}
      header={
        <>
          {drawerState.header === "Menu" && <Menu />}
          {drawerState.header}
        </>
      }
    >
      {renderedDrawers(drawerState.header)}
    </Drawer>
  );
}

export default GlobalDrawers;

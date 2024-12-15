"use client";

import { useCommonStore } from "@/stores/commonStore";
import { FilterX } from "lucide-react";
import { Drawer } from "../../common/Drawer";
import Filters from "../Filters";

export function ShopDrawers() {
  const drawerState = useCommonStore((state) => state.drawerState);
  const setDrawer = useCommonStore((state) => state.setDrawerState);

  const renderedDrawers = (active: string | undefined) => {
    switch (active) {
      case "Filter":
        return <Filters />;

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
          {drawerState.header === "Filter" && <FilterX />}
          {drawerState.header}
        </>
      }
    >
      {renderedDrawers(drawerState.header)}
    </Drawer>
  );
}

export default ShopDrawers;

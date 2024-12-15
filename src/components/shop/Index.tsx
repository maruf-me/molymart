"use client";
import { useCommonStore } from "@/stores/commonStore";
import { FilterX, LayoutGrid, Server, X } from "lucide-react";
import { useState } from "react";
import PaginationCustom from "../common/Pagination";
import { Text } from "../common/Text";
import PrimaryCard from "../product/PrimaryCard";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Filters from "./Filters";
import ListViewProducts from "./ListViewProducts";

const ShopIndex = () => {
  const setDrawer = useCommonStore((state) => state.setDrawerState);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showFilter, setShowFilter] = useState<boolean>(true);

  return (
    <div className="_container relative min-h-[calc(100vh-200px)]">
      <div className="flex flex-col gap-4 pb-8">
        <div className="flex justify-between">
          <div className="hidden lg:flex items-center gap-3">
            <Button
              className="gap-2 relative"
              variant={"outline"}
              onClick={() => setShowFilter(!showFilter)}
            >
              <FilterX size={16} />
              Show Filter
              <span className="absolute -top-1 -right-1 rounded-full h-2 w-2 bg-error-100"></span>
            </Button>
            <Button variant={"transparent"} className="gap-1 text-dark-80">
              Clear all <X size={16} />
            </Button>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <Button
                variant={"outline"}
                className="gap-2 lg:hidden"
                onClick={() => setDrawer({ open: true, header: "Filter" })}
              >
                <FilterX size={16} />
                Show Filter
              </Button>
              <Text variant="gray" className="font-medium text-sm">
                Showing <strong className="text-dark-100">9</strong> out of{" "}
                <strong className="text-dark-100">48</strong> products
              </Text>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => setView("grid")}
                variant={view === "grid" ? "primary" : "outline"}
              >
                <LayoutGrid />
              </Button>
              <Button
                onClick={() => setView("list")}
                variant={view === "list" ? "primary" : "outline"}
              >
                <Server />
                {/* <BetweenHorizontalStart /> */}
              </Button>

              <Select defaultValue="Featured">
                <SelectTrigger className="max-w-max h-[44px] py-0 text-xs sm:text-sm gap-2">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent align="center">
                  <SelectGroup>
                    <SelectItem value="Featured">Featured</SelectItem>
                    <SelectItem value="new-Featured">New Featured</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-4 pb-3 ">
          {showFilter && (
            <div className="hidden lg:block">
              <Filters />
            </div>
          )}

          {view === "grid" ? (
            <div
              className={`grid grid-cols-2 md:grid-cols-3 ${
                !showFilter && "lg:grid-cols-4"
              } gap-3`}
            >
              {Array.from({ length: 16 }).map((_, index) => (
                <PrimaryCard key={index} />
              ))}
            </div>
          ) : (
            <ListViewProducts />
          )}
        </div>

        <PaginationCustom />
      </div>
    </div>
  );
};

export default ShopIndex;

"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";

type IDrawerProps = {
  open: boolean;
  children: React.ReactNode;
  onClose: (open: boolean) => void;
  side?: "left" | "right";
  containerClassName?: string;
  header?: React.ReactNode | string;
};

export function Drawer({
  children,
  onClose,
  open,
  side = "right",
  containerClassName,
  header,
}: IDrawerProps) {
  return (
    <>
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent
          side={side}
          className={`bg-white p-0 sm:min-w-[288px] ${containerClassName}`}
        >
          <SheetHeader className="">
            <SheetTitle className="flex justify-between items-center gap-4 bg-primary-100">
              <div className="flex items-center gap-3 py-2.5 pl-3">
                {header}
              </div>
            </SheetTitle>
          </SheetHeader>

          <ScrollArea className=" h-[calc(100vh-52px)] rounded-md">
            {children}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}

export const DrawerFooter = ({
  children,
  height = "9.6rem",
  className = "",
}: {
  children: React.ReactNode;
  height?: string;
  className?: string;
}) => {
  return (
    <>
      <div style={{ height: height }}></div>
      <SheetFooter
        className={`absolute bottom-0 left-0 w-full px-space16 pb-space16 pt-space10 md:px-space32 md:pt-space16 md:pb-space24 border-t border-primary-20 dark:border-primary-80 background flex justify-end gap-space16 ${className}`}
      >
        {children}
      </SheetFooter>
    </>
  );
};

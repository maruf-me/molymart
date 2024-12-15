"use client";
import { Text } from "@/components/common/Text";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { BookImage, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const HeaderSearch = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useOutsideClick(() => setOpen(false));

  const [search, setSearch] = useState<string>("");

  return (
    <div className={`sm:relative w-full flex items-center h-full  max-w-xl mx-4`}>
      <div
        onClick={() => setOpen(true)}
        className="relative z-10 h-[48px] flex items-center w-full"
      >
        {!open && (
          <div className="relative w-full">
            <Select>
              <SelectTrigger className="absolute left-0.5 top-1/2 transform -translate-y-1/2 bg-dark-100 border-r px-2 py-0 h-[90%] max-w-[80px] sm:max-w-[124px] text-white focus:outline-none focus:ring-0 focus:ring-offset-0">
                <SelectValue
                  placeholder="All Categories"
                  defaultValue={"All"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Categories</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <input
              readOnly
              type="text"
              value={search}
              placeholder="Search product here..."
              className="w-full pl-24 sm:pl-32 pr-10 py-2 border border-dark-80 rounded-md focus:outline-none focus:ring focus:ring-primary-100"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        )}
      </div>

      <div
        ref={ref}
        className={`grid bg-white   ${open
          ? "grid-rows-[1fr] w-[90vw] sm:w-[60vw] z-50 shadow-xl border_primary"
          : "grid-rows-[0fr] w-0 z-0 border-transparent"
          } border absolute top-0 sm:-top-space8 left-1/2 transform -translate-x-1/2 rounded-lg duration-300 `}
      >
        <div className="overflow-hidden">
          <div className="relative p-3">
            <input
              type="text"
              value={search}
              autoComplete="off"
              placeholder="Search product here..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 pr-10 py-2 border border-dark-80 rounded-md focus:outline-none focus:ring focus:ring-primary-100"
            />
            <Button
              size={"icon"}
              variant={"transparent"}
              onClick={() => setOpen(true)}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <Search />
            </Button>
          </div>

          <div className="max-h-[70vh] overflow-y-scroll mt-2 pb-3">
            <div className="space-y-3">
              <div className="space-y-1">
                <Text
                  variant="secondary"
                  title="Category"
                  className="font-medium px-3 py-1 bg-dark-20"
                />

                <div className="px-3">Polyester Yarn</div>
              </div>

              <div className="space-y-1">
                <Text
                  variant="secondary"
                  title="Products"
                  className="font-medium px-3 py-1 bg-dark-20"
                />

                <ul className="px-3">
                  <li className="flex items-center gap-3">
                    <BookImage />
                    {/* <Image src={""} alt="" width={44} height={44} /> */}

                    <article>
                      <Text title="Product Name" className="font-semibold" />
                      <div className="flex items-center gap-2">
                        <Text
                          title="Product Description"
                          variant="primary"
                          className="font-medium text-sm"
                        />

                        <div className="bg-primary-100 rounded-full text-white px-2 py-[2px] text-xs font-medium uppercase">
                          KG
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;

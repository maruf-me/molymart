"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";

export const categories = [
  { title: "Electronic Devices", to: "#", icon: "/images/cat/cat1.svg" },
  { title: "Mobile Phones", to: "#", icon: "/images/cat/cat2.svg" },
  { title: "Fashion", to: "#", icon: "/images/cat/cat3.svg" },
  { title: "Health & Beauty", to: "#", icon: "/images/cat/cat4.svg" },
  { title: "Living & Furnitures", to: "#", icon: "/images/cat/cat5.svg" },
  { title: "Children & Toys", to: "#", icon: "/images/cat/cat6.svg" },
  { title: "Footwear", to: "#", icon: "/images/cat/cat7.svg" },
  { title: "Sports & Outdoor", to: "#", icon: "/images/cat/cat8.svg" },
  { title: "See all categories", to: "#" },
];

const HeroAsideBar = () => {
  return (
    <aside className="w-1/4 hidden lg:block ">
      <ScrollArea className="!p-0 border border-dark-40 rounded-md h-[360px] xxl:h-[460px]">
        <ul className="">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer px-4 py-[13px] text-dark-100 flex items-center justify-between gap-4 ${
                index === categories.length - 1 ? "" : "border-b border-dark-20"
              }`}
            >
              <div className="flex items-center gap-3">
                {category.icon && (
                  <Image alt="" width={20} height={20} src={category.icon} />
                )}
                {category.title}
                {index === 2 && (
                  <span className="px-2 py-1 bg-primary-100 text-xs rounded">
                    110 + 52
                  </span>
                )}
              </div>

              <ChevronDown className="h-4 w-4 rotate-[270deg]" />
            </li>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  );
};

export default HeroAsideBar;

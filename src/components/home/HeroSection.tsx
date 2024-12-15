"use client";

import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import HeroAsideBar from "./HeroAsideBar";
import { HeroSectionCarousel } from "./HeroSectionCarousel";

const HeroSection = () => {
  return (
    <section className="_container">
      <div className="flex flex-col gap-4 md:flex-row">
        <HeroAsideBar />

        <div className="w-full lg:w-3/4 bg-[#f7f7d5]">
          <HeroSectionCarousel />
        </div>
      </div>

      <ScrollArea className="pb-4">
        <div className="w-[620px] sm:w-auto grid grid-cols-3 gap-4 mt-4">
          <Image
            src="/images/banner1.svg"
            alt="Hero Banner"
            width={0}
            height={0}
            sizes="100vw"
            className="max-h-[268px] w-full"
          />
          <Image
            src="/images/banner2.svg"
            alt="Hero Banner"
            width={0}
            height={0}
            sizes="100vw"
            className="max-h-[268px] w-full"
          />
          <Image
            src="/images/banner3.svg"
            alt="Hero Banner"
            width={0}
            height={0}
            sizes="100vw"
            className="max-h-[268px] w-full"
          />
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default HeroSection;

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Text } from "../common/Text";
import PrimaryCard from "../product/PrimaryCard";

export const DealsOfWeek = () => {
  return (
    <section className="_container mt-10">
      <Text className="text-xl sm:text-2xl font-semibold py-3">
        Deals of the Week
      </Text>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="">
                <PrimaryCard />
                {/* <div className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-top-7 sm:-top-8 !left-[calc(100%-72px)]" />
        <CarouselNext className="-top-7 sm:-top-8 !right-0" />
      </Carousel>
    </section>
  );
};

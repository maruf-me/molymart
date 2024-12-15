"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Text } from "../common/Text";

export const TopCategories = () => {
  return (
    <section className="_container">
      <Text className="text-2xl font-semibold  text-center py-3">
        Top Categories
      </Text>

      <div className="sm:px-11">
        <Carousel
          className="w-full"
          opts={{ align: "start" }}
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="flex flex-col items-center py-2">
                  <div className="max-w-[120px] w-full rounded flex aspect-square items-center justify-center p-6">
                    <Image
                      alt="cat"
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/images/yerBat.svg"
                      className="max-h-[112px] object-contain w-full"
                    />
                  </div>

                  <div className="p-1 sm:p-4 text-center">
                    <Text className="sm:text-lg font-medium">
                      Category {index + 1}
                    </Text>
                    <Text className="text-xs sm:text-sm">
                      Description of category {index + 1}
                    </Text>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
          <CarouselPrevious className="!top-[112%] !left-[calc(50%-40px)] sm:!-left-12 sm:!top-1/2" />
          <CarouselNext className="!top-[112%] !right-[calc(50%-40px)] sm:!-right-12 sm:!top-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

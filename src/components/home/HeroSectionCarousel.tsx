"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../common/Carousel";
import { Text } from "../common/Text";
import { Button } from "../ui/button";

const products = [
  {
    id: 1,
    image: "/images/cheyar.png",
  },
  {
    id: 2,
    image: "/images/shou.png",
  },
  {
    id: 3,
    image: "/images/watch.png",
  },
];

export function HeroSectionCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    // Clear the timeout when the component unmounts or the index changes
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative  ">
      <Carousel index={index} onIndexChange={setIndex}>
        <CarouselContent className="relative">
          {products.map((item) => {
            return (
              <CarouselItem key={item.id} className="">
                <div className="bg-dark-20 h-full max-h-[460px] relative overflow-hidden rounded-md">
                  <Image
                    alt="Hero"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={item.image}
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute top-0 left-0 h-full w-full p-3 sm:p-6">
                    <div className="w-3/4 md:w-3/5 lg:w-1/2 flex flex-col h-full justify-between gap-3">
                      <article className="space-y-1 sm:space-y-4">
                        <Text className="!text-[#1581CF] text-xs sm:text-sm font-semibold">
                          X - GADGETS
                        </Text>
                        <Text className="text-lg leading-4 sm:text-2xl md:text-4xl font-bold">
                          Beat the heat with the upcoming mobiles
                        </Text>
                        <Text className="text-sm sm:text-lg" variant="gray">
                          Flash Sale up to{" "}
                          <span className="text-dark-100 font-semibold">
                            {" "}
                            10% OFF
                          </span>
                        </Text>
                      </article>

                      <Button className="max-w-max gap-1">
                        Shop Now <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* <CarouselNavigation
            classNameButton="bg-white *:stroke-gray-90"
            className="absolute left-0 w-full justify-between gap-2"
            alwaysShow
          /> */}
      </Carousel>

      <div className="flex flex-col gap-3 h-full justify-center top-0 right-4 absolute">
        {products.map((item, idx) => {
          return (
            <button
              type="button"
              key={item.id + "pagination"}
              onClick={() => setIndex(idx)}
              aria-label={`Go to slide ${item}`}
              className={`w-2 rounded-full  hover:bg-primary-100 duration-300 ${
                index === idx ? "bg-primary-100 h-5" : "bg-white h-2"
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

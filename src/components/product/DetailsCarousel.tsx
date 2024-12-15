"use client";
import { Expand } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../common/Carousel";
import { Button } from "../ui/button";

const products = [
  {
    id: 1,
    image: "/images/product.svg",
  },
  {
    id: 2,
    image: "/images/prd/prd1.svg",
  },
  {
    id: 3,
    image: "/images/product.svg",
  },
  {
    id: 4,
    image: "/images/prd/prd1.svg",
  },
  {
    id: 5,
    image: "/images/product.svg",
  },
];

export function DetailsCarousel() {
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
      <div className="sm:ml-[44px] bg-dark-20 lg:ml-[86px] relative h-full max-h-[520px] sm:max-w-[310px] sm:min-w-[260px] md:min-w-[372px] lg:min-w-[433px] lg:max-w-[433px]">
        <div className="hidden sm:flex flex-col gap-2 h-full w-[44px] lg:w-[86px] top-0 -left-[44px] lg:-left-[86px] absolute">
          {products.map((item, idx) => {
            return (
              <button
                type="button"
                key={item.id + "pagination"}
                onClick={() => setIndex(idx)}
                aria-label={`Go to slide ${item}`}
                className={`w-[90%] border-2 rounded overflow-hidden ${
                  index === idx ? "border-dark-60" : "border-dark-20"
                }`}
              >
                <Image
                  alt=""
                  height={0}
                  width={0}
                  sizes="100vw"
                  src={"/images/product.svg"}
                  className="w-full h-full object-contain"
                />
              </button>
            );
          })}
        </div>
        <Carousel index={index} onIndexChange={setIndex}>
          <CarouselContent className="relative">
            {products.map((item) => {
              return (
                <CarouselItem key={item.id} className="">
                  <div className="bg-dark-20 h-full max-h-[520px] sm:max-w-[310px] sm:min-w-[260px] md:min-w-[372px] lg:min-w-[433px] relative overflow-hidden">
                    <Image
                      alt=""
                      height={0}
                      width={0}
                      sizes="100vw"
                      src={item.image}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <Button
            size={"icon"}
            variant={"outline"}
            className="h-8 w-8 absolute top-2 right-2 shadow-md"
          >
            <Expand size={16} />
          </Button>

          <CarouselNavigation
            classNameButton="bg-white *:stroke-gray-90"
            className="absolute left-0 w-full justify-between gap-2"
            alwaysShow
          />
        </Carousel>
      </div>
    </div>
  );
}

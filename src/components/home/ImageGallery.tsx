"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { InfiniteSlider } from "../animations/InfiniteSlider";
import { Text } from "../common/Text";
import { Button } from "../ui/button";

const pictures = [
  "/images/others/img1.svg",
  "/images/others/img2.svg",
  "/images/others/img3.svg",
  "/images/others/img1.svg",
  "/images/others/img2.svg",
  "/images/others/img4.svg",
  "/images/others/img3.svg",
  "/images/others/img5.svg",
  "/images/others/img1.svg",
];
const news = [
  {
    img: "/images/others/news1.svg",
  },
  {
    img: "/images/others/news2.svg",
  },
  {
    img: "/images/others/news1.svg",
  },
  {
    img: "/images/others/news2.svg",
  },
];

const ImageGallery = () => {
  return (
    <section className="mt-10">
      <div className="_container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
          <div className="sm:col-span-3 relative max-h-72 sm:max-h-[440px] h-full bg-dark-40 rounded-md">
            <Image
              alt="Green Sofa"
              height={0}
              width={0}
              sizes="100vw"
              src="/images/others/sofa.png"
              className="rounded-lg w-full h-full object-cover"
            />
            <Button className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              Shop Now
              <ChevronDown className="rotate-[270deg]" size={18} />
            </Button>
          </div>

          <div className="grid grid-rows-2 md:col-start-4 col-span-full gap-3">
            <div className="relative h-72 sm:h-[214px] rounded-md">
              <Image
                alt="Green Sofa"
                height={0}
                width={0}
                sizes="100vw"
                src="/images/others/case.png"
                className="rounded-lg w-full h-full object-cover"
              />
              <Button className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                Shop Now
                <ChevronDown className="rotate-[270deg]" size={18} />
              </Button>
            </div>
            <div className="relative h-72 sm:h-[214px] rounded-md">
              <Image
                alt="Green Sofa"
                height={0}
                width={0}
                sizes="100vw"
                src="/images/others/bag.png"
                className="rounded-lg w-full h-full object-cover"
              />
              <Button className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                Shop Now
                <ChevronDown className="rotate-[270deg]" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <InfiniteSlider duration={75} className="">
        <div className="flex  gap-4 mb-8">
          {pictures.map((img, i) => (
            <div
              key={i}
              className="relative h-[280px] sm:h-[380px] w-[260px] sm:w-[312px] rounded-md bg-gray-200"
            >
              <Image
                src={img}
                alt={`Product ${i + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </InfiniteSlider>

      <div className="_container my-10">
        <Text className="text-2xl font-semibold py-3">Latest News</Text>

        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {news.map((news, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="w-full">
                  <div className="flex aspect-auto items-center justify-center sm:max-h-[316px] sm:h-screen rounded-md">
                    <Image
                      src={news.img}
                      alt={`news`}
                      sizes="100vw"
                      height={0}
                      width={0}
                      className="rounded-lg w-full object-contain"
                    />
                  </div>

                  <article className="py-3 flex items-center gap-4 text-sm font-medium text-dark-80">
                    <Text
                      title="12 Mar 2024"
                      className="text-sm font-medium text-dark-80"
                    />

                    <li>Jack Black</li>
                  </article>
                  <Text
                    title="Money hunting - The new trend in adventurous for tourists all round the world in Las Vegas"
                    className="text-xl font-medium line-clamp-2"
                  />
                  <Button variant={"link"} className="px-0 font-semibold">
                    Read More
                    <ChevronDown className="rotate-[270deg]" size={18} />
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-top-7 sm:-top-8 !left-[calc(100%-72px)]" />
          <CarouselNext className="-top-7 sm:-top-8 !right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageGallery;

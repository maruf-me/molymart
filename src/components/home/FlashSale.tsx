"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { InfiniteSlider } from "../animations/InfiniteSlider";
import { Text } from "../common/Text";
import SecondaryCard from "../product/SecondaryCard";

const FlashSale = () => {
  return (
    <section className="bg-[#F1F4F0]">
      <div className="_container py-6">
        <article>
          <Text
            title="Flash Sale"
            className="text-2xl font-semibold text-center pt-4"
          />
          <Text
            title="Hurry up! Up to 30% discount. Offer ends in.."
            className="text-md text-dark-90 text-center py-2"
          />
        </article>

        <div className="flex justify-center gap-4 items-center">
          <article>
            <Text className="relative h-14 w-14 bg-primary-100 rounded flex justify-center items-center text-xl font-medium text-dark-100">
              07
              <span className="absolute -right-3 top-1/2 transform -translate-y-1/2">
                :
              </span>
            </Text>
            <Text title="Day" className="text-center text-sm font-medium" />
          </article>
          <article>
            <Text className="relative h-14 w-14 bg-primary-100 rounded flex justify-center items-center text-xl font-medium text-dark-100">
              07
              <span className="absolute -right-3 top-1/2 transform -translate-y-1/2">
                :
              </span>
            </Text>
            <Text title="Hour" className="text-center text-sm font-medium" />
          </article>
          <article>
            <Text className="relative h-14 w-14 bg-primary-100 rounded flex justify-center items-center text-xl font-medium text-dark-100">
              07
              <span className="absolute -right-3 top-1/2 transform -translate-y-1/2">
                :
              </span>
            </Text>
            <Text title="Min" className="text-center text-sm font-medium" />
          </article>
          <article>
            <Text className="relative h-14 w-14 bg-primary-100 rounded flex justify-center items-center text-xl font-medium text-dark-100">
              07
            </Text>
            <Text title="Sec" className="text-center text-sm font-medium" />
          </article>
        </div>

        <div className="pb-16 sm:pb-6 sm:px-11 py-6">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <SecondaryCard />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="!top-[110%] !left-[calc(50%-40px)] sm:!-left-12 sm:!top-1/2" />
            <CarouselNext className="!top-[110%] !right-[calc(50%-40px)] sm:!-right-12 sm:!top-1/2" />
          </Carousel>
        </div>
      </div>
      <InfiniteSlider className="">
        <div className="flex py-2 gap-8 bg-black">
          {Array.from({ length: 10 }).map((_, index) => (
            <Text
              key={index}
              title={`Free home delivery above $500 shopping.`}
              className="text-sm text-white"
            />
          ))}
        </div>
      </InfiniteSlider>
    </section>
  );
};

export default FlashSale;

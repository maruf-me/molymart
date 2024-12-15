"use client";
import { Icon } from "@iconify/react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { GitCompareArrows, Heart } from "lucide-react";
import { useState } from "react";
import MyRating from "../common/MyRating";
import { Text } from "../common/Text";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import Description from "./Description";
import { DetailsCarousel } from "./DetailsCarousel";
import DetailsPaymentSystem from "./DetailsPaymentSystem";
import PrimaryCard from "./PrimaryCard";
import Reviews from "./Reviews";
import Shipping from "./Shipping";
import Specification from "./Specification";

const sizes = [
  { id: 1, name: "38", value: "38" },
  { id: 2, name: "40", value: "40" },
  { id: 3, name: "42", value: "42" },
  { id: 4, name: "43", value: "43" },
  { id: 5, name: "44", value: "L" },
];
const colors = [
  { id: 1, name: "#A1ACE9", value: "#A1ACE9" },
  { id: 2, name: "#E2ECDE", value: "#E2ECDE" },
  { id: 3, name: "#FFFFFF", value: "#FFFFFF" },
];

const tabList = ["Description", "Specification", "Reviews", "Shipping"];

const ProductDetails = () => {
  const [activeSizes, setActiveSizes] = useState<number[]>([]);
  const [activeColor, setActiveColor] = useState<string>("#E2ECDE");
  const [activeTab, setActiveTab] = useState<string>("Description");

  const activeSection = () => {
    switch (activeTab) {
      case tabList[0]:
        return <Description />;
      case tabList[1]:
        return <Specification />;
      case tabList[2]:
        return <Reviews />;
      case tabList[3]:
        return <Shipping />;

      default:
        return <Description />;
    }
  };

  return (
    <div className="pb-4 bg-white">
      <div className="flex">
        <div className="md:max-w-[calc(100%-330px)]">
          <section className="flex flex-col xl:flex-row gap-3">
            <DetailsCarousel />

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="pb-1.5">
                    <MyRating rating={4} />
                  </div>
                  <Text variant="gray" className="text-xs">
                    (34 Reviews)
                  </Text>
                  <Text className="text-xs font-medium px-3 border-l border-dark-60">
                    241 Sold
                  </Text>
                </div>

                <Text variant="secondary" className="text-sm sm:text-lg">
                  Cool sweater from the greens of new Iceland Cotton with a very big
                  name that crosses two lines during purchase
                </Text>

                <Text variant="gray" className="text-sm my-2">
                  The garments labelled as committed are products that have been
                  produced using sustainable fibres or processes, reducing their
                  environmental impact. Umino’s goal is to support the
                  implementation of practices more committed to the environment.
                </Text>

                <article className="flex flex-wrap justify-between items-center gap-2 sm:gap-4 border border-[#E1151526] bg-[#F6EEEF] rounded px-3 py-2 my-3">
                  <Text className="text-base font-medium" variant="error">
                    Hurry up! Sale ends in..
                  </Text>
                  <Text className="text-base font-medium" variant="error">
                    07d : 12h : 45m : 23s
                  </Text>
                </article>

                <div className="flex flex-wrap items-center gap-2">
                  <article className="flex gap-3 items-end">
                    <Text className="text-2xl font-semibold">$ 100.00</Text>
                    <Text variant="gray" className="text-base pb-1">
                      <del>$ 200.00</del>
                    </Text>
                  </article>

                  <Text className="text-sm font-medium px-3 py-1 rounded-full bg-primary-100">
                    Save 15%
                  </Text>
                </div>

                <div className="flex items-center gap-4 my-2">
                  <Text className="font-medium text-base">Color</Text>

                  <RadioGroup
                    defaultValue={activeColor}
                    className="flex items-center gap-3"
                    onValueChange={(e) => setActiveColor(e)}
                  >
                    {colors.map((color, index) => (
                      <label
                        key={index}
                        htmlFor={color.value}
                        className={`h-4 w-4 rounded-full border border-dark-40 ${activeColor === color.value &&
                          "ring-1 ring-dark-80 ring-offset-2"
                          }`}
                        style={{ backgroundColor: color.value }}
                      >
                        <RadioGroupItem
                          value={color.value}
                          id={color.value}
                          className="hidden"
                        />
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <Text className="font-medium text-base">Size</Text>

                  <div className="flex flex-wrap gap-1 sm:gap-3">
                    {sizes.map((item, index) => (
                      <label
                        key={index}
                        htmlFor={String(item.id) + "sizeCard"}
                        className={`${activeSizes.includes(item.id) ? "bg-primary-100" : ""
                          } inline-flex text-sm font-medium px-3 py-1  rounded border border-dark-40`}
                      >
                        <div className="hidden">
                          <Checkbox
                            id={String(item.id) + "sizeCard"}
                            name={String(item.id) + "sizeCard"}
                            checked={activeSizes.includes(item.id)}
                            onCheckedChange={(checked: CheckedState) => {
                              if (checked === true) {
                                setActiveSizes([...activeSizes, item.id]);
                              } else {
                                const filteredSizes = activeSizes.filter(
                                  (i) => i !== item.id
                                );
                                setActiveSizes(filteredSizes);
                              }
                            }}
                          />
                        </div>
                        <Text>{item.name}</Text>
                      </label>
                    ))}
                  </div>

                  <Text className="font-medium text-base underline">
                    Size Guide
                  </Text>
                </div>

                <article className="py-4 my-3 border-y border-dark-40">
                  <Text className="text-sm font-medium" variant="gray">
                    SKU: <span className="text-dark-100">UTD7802574</span>
                  </Text>
                  <Text className="text-sm font-medium" variant="gray">
                    Categories:{" "}
                    <span className="text-dark-100">
                      Fashion, Winter, Women, New Arrivals, Flash Sales, Special
                      Offer, Hoodie
                    </span>
                  </Text>
                </article>

                <div className="flex items-center gap-3">
                  <Text className="font-medium text-sm" variant="gray">
                    Share
                  </Text>
                  <Button
                    size={"icon"}
                    variant={"transparent"}
                    className="hover:bg-primary-100 duration-300 h-10 w-10 hover:scale-105"
                  >
                    <Icon
                      icon="ri:facebook-fill"
                      color="#7A7A7A"
                      height={24}
                      width={24}
                    />
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"transparent"}
                    className="hover:bg-primary-100 duration-300 h-10 w-10 hover:scale-105"
                  >
                    <Icon
                      icon="mdi:instagram"
                      color="#7A7A7A"
                      height={24}
                      width={24}
                    />
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"transparent"}
                    className="hover:bg-primary-100 duration-300 h-10 w-10 hover:scale-105"
                  >
                    <Icon
                      icon="ic:baseline-tiktok"
                      color="#7A7A7A"
                      height={24}
                      width={24}
                    />
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"transparent"}
                    className="hover:bg-primary-100 duration-300 h-10 w-10 hover:scale-105"
                  >
                    <Icon
                      icon="ic:baseline-whatsapp"
                      color="#7A7A7A"
                      height={24}
                      width={24}
                    />
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Button
                    variant={"outline"}
                    className="!rounded-full text-sm font-medium gap-2"
                  >
                    <Heart size={16} />
                    Add to Wishlist
                  </Button>
                  <Button
                    variant={"outline"}
                    className="!rounded-full text-sm font-medium gap-2"
                  >
                    <GitCompareArrows size={16} />
                    Add to Compare
                  </Button>
                </div>
              </div>

              <div className="md:hidden w-full">
                <DetailsPaymentSystem />
              </div>
            </div>
          </section>

          <section className="space-y-5 my-12">
            <div className="flex flex-wrap gap-1 sm:gap-3 py-4 border-b border-dark-40">
              {tabList.map((tab) => (
                <Button
                  key={tab}
                  size={"sm"}
                  onClick={() => setActiveTab(tab)}
                  className="rounded-full sm:px-6 text-xs sm:text-sm"
                  variant={activeTab === tab ? "primary" : "outline"}
                >
                  {tab}
                </Button>
              ))}
            </div>

            {activeSection()}
          </section>
        </div>


        <div className=" hidden md:block w-[330px]">
          <div className="flex justify-end sticky top-[140px] z-20">
            <DetailsPaymentSystem />
          </div>
        </div>
      </div>


      {/* Products sections ---------- */}
      <section className="space-y-4 my-4">
        <Text variant="secondary" className="text-base sm:text-2xl font-medium">
          Related Products
        </Text>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <PrimaryCard key={index} />
          ))}
        </div>
      </section>

      <section className="space-y-4 my-8">
        <Text variant="secondary" className="text-base sm:text-2xl font-medium">
          People Also Bought
        </Text>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <PrimaryCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;

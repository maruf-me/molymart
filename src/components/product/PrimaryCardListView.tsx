"use client";
import { CheckedState } from "@radix-ui/react-checkbox";
import {
  Eye,
  GitCompareArrows,
  Heart,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MyRating from "../common/MyRating";
import { Text } from "../common/Text";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

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

const PrimaryCardListView = () => {
  const [activeSizes, setActiveSizes] = useState<number[]>([]);
  const [activeColor, setActiveColor] = useState<string>("#E2ECDE");

  return (
    <div className="bg-white group flex flex-col sm:flex-row gap-3">
      <div className="grid">
        <div className="bg-dark-20 h-full max-h-[320px] max-w-[310px] sm:min-w-[260px] lg:min-w-[310px] relative overflow-hidden">
          <Image
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            src={"/images/product.svg"}
            className="w-full h-full object-contain"
          />

          <Text
            title="New Arrival"
            className="font-medium text-[10px] sm:text-xs bg-primary-100 px-1.5 py-0.5 sm:px-4 sm:py-1.5 absolute top-2 left-2 rounded"
          />

          <div className="absolute -bottom-20 group-hover:bottom-2 right-2 duration-300 transform ease-in flex flex-col gap-2">
            <Button variant={"outline"} size={"icon"}>
              <Eye size={16} />
            </Button>
            <Button variant={"outline"} size={"icon"}>
              <Heart size={16} />
            </Button>
            <Button variant={"outline"} size={"icon"}>
              <GitCompareArrows size={16} />
            </Button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 mt-2">
          <Button
            variant={"outline"}
            className="w-full sm:w-auto !rounded-none  text-xs px-0 gap-2"
          >
            <ShoppingBag size={16} />
            Buy Now
          </Button>
          <Button
            variant={"outline"}
            className="w-full sm:w-auto !rounded-none text-xs px-0 gap-2"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="">
        <div className="flex flex-wrap items-center gap-2">
          <div className="pb-1.5">
            <MyRating rating={4} />
          </div>
          <Text variant="gray" className="text-xs">
            (34 Reviews)
          </Text>
          <Text className="text-xs font-medium px-3 py-1 rounded-full bg-primary-100">
            241 Sold
          </Text>
        </div>

        <Text variant="secondary" className="text-sm sm:text-lg line-clamp-2">
          Cool sweater from the greens of new Iceland Cotton with a very big
          name that crosses two lines during purchase
        </Text>

        <Text variant="gray" className="text-sm my-2 line-clamp-3">
          The garments labelled as committed are products that have been
          produced using sustainable fibres or processes, reducing their
          environmental impact. Umino’s goal is to support the implementation of
          practices more committed to the environment.
        </Text>

        <div className="flex flex-wrap items-center gap-2">
          <Text variant="gray" className="text-sm">
            <del>$ 200.00</del>
          </Text>
          <Text className="text-sm font-medium">$ 99.99</Text>

          <Text
            variant="white"
            className="text-sm font-medium px-3 py-1 rounded-full bg-error-100"
          >
            25% off
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

        <div className="flex items-center gap-4">
          <Text className="font-medium text-base">Size</Text>

          <div className="flex flex-wrap gap-3">
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
        </div>

        {/* <div className="grid sm:grid-cols-2 mt-3">
          <Button
            variant={"outline"}
            className="w-full sm:w-auto !rounded-none  text-xs px-0 gap-2"
          >
            <ShoppingBag size={16} />
            Buy Now
          </Button>
          <Button
            variant={"outline"}
            className="w-full sm:w-auto !rounded-none text-xs px-0 gap-2"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default PrimaryCardListView;

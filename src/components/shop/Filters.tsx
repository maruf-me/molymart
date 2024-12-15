"use client";

import { useModifyParams } from "@/hooks/useModifyParams";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Text } from "../common/Text";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Collections = [
  { id: 1, name: "Corporate", value: 67 },
  { id: 2, name: "E-commerce", value: 34 },
  { id: 3, name: "Portfolio", value: 23 },
  { id: 4, name: "Blog", value: 12 },
  { id: 5, name: "Landing", value: 9 },
  { id: 6, name: "Personal", value: 5 },
  { id: 7, name: "Education", value: 3 },
  { id: 8, name: "Health", value: 2 },
  { id: 9, name: "Others", value: 1 },
];

const colors = [
  { id: 1, name: "White", value: "white" },
  { id: 2, name: "Black", value: "black" },
  { id: 3, name: "Red", value: "red" },
  { id: 4, name: "Silver", value: "silver" },
  { id: 5, name: "Cyan", value: "cyan" },
  { id: 6, name: "Yellow", value: "yellow" },
  { id: 7, name: "Mixed", value: "mixed" },
];
const sizes = [
  { id: 1, name: "XXS", value: "XXS" },
  { id: 2, name: "XS", value: "XS" },
  { id: 3, name: "S", value: "S" },
  { id: 4, name: "M", value: "M" },
  { id: 5, name: "L", value: "L" },
  { id: 6, name: "XXL", value: "XXL" },
  { id: 7, name: "XXXL", value: "XXXL" },
];
const brands = [
  { id: 1, name: "Nokia", value: "67" },
  { id: 2, name: "Samsung", value: "122" },
  { id: 3, name: "Reebok", value: "45" },
  { id: 4, name: "American Eagle", value: "9" },
  { id: 5, name: "Levi", value: "342" },
  { id: 6, name: "Micron", value: "88" },
  { id: 7, name: "Nokia", value: "99" },
];
const tags = [
  { id: 1, name: "Classic", value: "classic" },
  { id: 2, name: "Modern", value: "modern" },
  { id: 3, name: "Premium", value: "premium" },
  { id: 4, name: "futuristic", value: "Futuristic" },
  { id: 5, name: "Antique", value: "antique" },
  { id: 6, name: "Luxury", value: "luxury" },
];

const Filters = () => {
  const searchParams = useSearchParams();
  const { add, remove } = useModifyParams("categories");

  const activeCat = (id: string) =>
    searchParams.getAll("categories").includes(id);

  const [activeColors, setActiveColors] = useState<number[]>([]);
  const [activeSizes, setActiveSizes] = useState<number[]>([]);
  const [activeBrands, setActiveBrands] = useState<number[]>([]);
  const [activeTags, setActiveTags] = useState<number[]>([]);

  return (
    <div className="lg:w-[312px] border border-dark-40 py-2 rounded-md">
      <div>
        <Text className="font-medium text-base px-3 pb-2">Collections</Text>
        {Collections.map((item, index) => (
          <label
            key={index}
            htmlFor={String(item.id)}
            className="flex items-center gap-3 text-sm font-medium justify-between px-3 py-1"
          >
            <div className="flex items-center gap-2">
              <Checkbox
                id={String(item.id)}
                name={String(item.id)}
                checked={activeCat(item.id.toString())} // searchParams.getAll("categories").includes(item.id.toString())
                onCheckedChange={(checked: CheckedState) => {
                  if (checked === true) {
                    add(item.id.toString());
                  } else {
                    remove(item.id.toString());
                  }
                }}
              />
              <Text
                variant={activeCat(item.id.toString()) ? "default" : "gray"}
              >
                {item.name}
              </Text>
            </div>
            <Text variant={activeCat(item.id.toString()) ? "default" : "gray"}>
              ({item.value})
            </Text>
          </label>
        ))}
      </div>
      {/* Availability section ---------------------------- */}
      <div className="px-3 border-y border-dark-40 py-3 my-3">
        <Text className="font-medium text-base pb-2">Availability</Text>

        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2 text-dark-80 text-sm font-medium justify-between">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="default" id="r1" />
              <label htmlFor="r1">In Stock</label>
            </div>

            <Text variant={"gray"}>(543)</Text>
          </div>
          <div className="flex items-center space-x-2 text-dark-80 text-sm font-medium justify-between">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <label htmlFor="r2">Out of Stock</label>
            </div>
            <Text variant={"gray"}>(0)</Text>
          </div>
        </RadioGroup>
      </div>
      {/* Prices section ---------------------------- */}
      <div className="px-3  py-3">
        <Text className="font-medium text-base pb-2">Price</Text>

        <RadioGroup defaultValue="Custom">
          <div className="flex items-center space-x-2 text-dark-80 text-sm font-medium">
            <RadioGroupItem value="default" id="$0 - $99" />
            <label htmlFor="$0 - $99">$0 - $99</label>
          </div>
          <div className="flex items-center space-x-2 text-dark-80 text-sm font-medium">
            <RadioGroupItem value="$100 - $999" id="$100 - $999" />
            <label htmlFor="$100 - $999">$100 - $999</label>
          </div>
          <div className="flex items-center space-x-2 text-dark-80 text-sm font-medium">
            <RadioGroupItem value="$1000 - $4999" id="$1000 - $4999" />
            <label htmlFor="$1000 - $4999">$1000 - $4999</label>
          </div>
          <div className="flex items-center space-x-2 text-dark-80 text-sm font-medium">
            <RadioGroupItem value="$5000 - $20,000" id="$5000 - $20,000" />
            <label htmlFor="$5000 - $20,000">$5000 - $20,000</label>
          </div>
          <div className="flex items-center space-x-2 text-dark-80 text-sm font-medium">
            <RadioGroupItem value="$5000 - $20,0000" id="$5000 - $20,0000" />
            <label htmlFor="$5000 - $20,0000">$5000 - $20,0000</label>
          </div>
          <div className="flex items-center space-x-2 text-dark-80 text-sm font-medium">
            <RadioGroupItem value="Custom" id="Custom" />
            <label htmlFor="Custom">Custom</label>
          </div>
        </RadioGroup>
      </div>
      {/* Colors section ---------------------------- */}
      <div className="px-3 border-y border-dark-40 py-6 my-3">
        <Text className="font-medium text-base pb-2">Colors</Text>

        <div className="flex flex-wrap gap-3">
          {colors.map((item, index) => (
            <label
              key={index}
              htmlFor={String(item.id) + "color"}
              className={`${
                activeColors.includes(item.id) ? "bg-primary-100" : ""
              } inline-flex text-sm font-medium px-3 py-1  rounded border border-dark-40`}
            >
              <div className="hidden">
                <Checkbox
                  id={String(item.id) + "color"}
                  name={String(item.id) + "color"}
                  checked={activeColors.includes(item.id)}
                  onCheckedChange={(checked: CheckedState) => {
                    if (checked === true) {
                      setActiveColors([...activeColors, item.id]);
                    } else {
                      const filteredColors = activeColors.filter(
                        (i) => i !== item.id
                      );
                      setActiveColors(filteredColors);
                    }
                  }}
                />
              </div>
              <Text>{item.name}</Text>
            </label>
          ))}
        </div>
      </div>
      {/* Sizes section ---------------------------- */}
      <div className="py-3">
        <Text className="font-medium text-base px-3 pb-2">Size</Text>

        <div className="flex flex-wrap gap-3 px-3">
          {sizes.map((item, index) => (
            <label
              key={index}
              htmlFor={String(item.id) + "size"}
              className={`${
                activeSizes.includes(item.id) ? "bg-primary-100" : ""
              } inline-flex text-sm font-medium px-3 py-1  rounded border border-dark-40`}
            >
              <div className="hidden">
                <Checkbox
                  id={String(item.id) + "size"}
                  name={String(item.id) + "size"}
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
      {/* Brands section ---------------------------- */}
      <div className="px-3 border-y border-dark-40 py-6 my-3">
        <Text className="font-medium text-base px-3 pb-2">Brands</Text>
        {brands.map((item, index) => (
          <label
            key={index}
            htmlFor={String(item.id) + "brand"}
            className="flex items-center gap-3 text-sm font-medium justify-between px-3 py-1"
          >
            <div className="flex items-center gap-2">
              <Checkbox
                id={String(item.id) + "brand"}
                name={String(item.id) + "brand"}
                checked={activeBrands.includes(item.id)}
                onCheckedChange={(checked: CheckedState) => {
                  if (checked === true) {
                    setActiveBrands([...activeBrands, item.id]);
                  } else {
                    const filteredBrands = activeBrands.filter(
                      (i) => i !== item.id
                    );
                    setActiveBrands(filteredBrands);
                  }
                }}
              />
              <Text
                variant={activeBrands.includes(item.id) ? "default" : "gray"}
              >
                {item.name}
              </Text>
            </div>
            <Text variant={activeBrands.includes(item.id) ? "default" : "gray"}>
              ({item.value})
            </Text>
          </label>
        ))}
      </div>
      {/* Tags section ---------------------------- */}
      <div className="py-3">
        <Text className="font-medium text-base px-3 pb-2">Tags</Text>

        <div className="flex flex-wrap gap-3 px-3">
          {tags.map((item, index) => (
            <label
              key={index}
              htmlFor={String(item.id) + "Tags"}
              className={`${
                activeTags.includes(item.id) ? "bg-primary-100" : ""
              } inline-flex text-sm font-medium px-3 py-1 border border-dark-40 rounded-full`}
            >
              <div className="hidden">
                <Checkbox
                  id={String(item.id) + "Tags"}
                  name={String(item.id) + "Tags"}
                  checked={activeTags.includes(item.id)}
                  onCheckedChange={(checked: CheckedState) => {
                    if (checked === true) {
                      setActiveTags([...activeTags, item.id]);
                    } else {
                      const filteredTags = activeTags.filter(
                        (i) => i !== item.id
                      );
                      setActiveTags(filteredTags);
                    }
                  }}
                />
              </div>
              <Text>{item.name}</Text>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;

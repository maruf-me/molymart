"use client";
import { Eye, ShoppingCart } from "lucide-react";
import Image from "next/image";
import MyRating from "../common/MyRating";
import { Progress } from "../common/Progress";
import { Text } from "../common/Text";
import { Button } from "../ui/button";

const SecondaryCard = () => {
  return (
    <div className="group bg-white p-4">
      <div className="bg-dark-20 max-h-[320px] relative overflow-hidden">
        <Image
          src={"/images/product.svg"}
          alt=""
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-full object-contain"
        />

        <Text
          title="50% off"
          className="font-medium text-xs bg-primary-100 px-4 py-1.5 absolute top-2 left-2 rounded"
        />
      </div>

      <div className="flex items-center gap-2">
        <MyRating rating={4} />
        <Text variant="gray" className="text-xs">
          (34 Reviews)
        </Text>
      </div>

      <Text variant="gray" className="text-sm my-1">
        Cool sweater from the greens of new Iceland Cotton
      </Text>
      <div className="">
        <Text variant="secondary" className="text-xs font-medium pb-1">
          34 items left!
        </Text>
        <Progress value={50} />
      </div>

      <div className="flex items-center gap-2 my-2">
        <Text variant="gray" className="text-sm">
          <del>$ 200.00</del>
        </Text>
        <Text className="text-sm font-medium">$ 99.99</Text>

        <Text className="text-xs font-medium px-3 py-1 rounded-full bg-primary-100">
          25% off
        </Text>
      </div>

      <div className="w-full grid grid-cols-2">
        <Button
          variant={"outline"}
          className="w-full !rounded-none text-xs px-0 gap-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
        <Button
          variant={"outline"}
          className="w-full !rounded-none  text-xs px-0 gap-2"
        >
          <Eye size={16} />
          Quick View
        </Button>
      </div>
    </div>
  );
};

export default SecondaryCard;

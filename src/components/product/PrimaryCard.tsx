"use client";
import {
  Eye,
  GitCompareArrows,
  Heart,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MyRating from "../common/MyRating";
import { Text } from "../common/Text";
import { Button } from "../ui/button";

export type ProductDef = {
  img: string;
  title: string;
  top: string;
};

const PrimaryCard = ({ product }: { product?: ProductDef }) => {
  return (
    <div className="group">
      <div className="bg-dark-20 max-h-[172px] sm:max-h-[320px] relative overflow-hidden">
        <div className="relative w-full" style={{ paddingTop: '75%' }}>
          {/* 75% padding creates a 4:3 aspect ratio */}
          <Image
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            src={product?.img ? product.img : "/images/product.svg"}
            className="absolute top-0 left-0 w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 ease-in"
          />
        </div>

        <Text
          title={product?.top ? product.top : "New Arrival"}
          className={`font-medium text-[10px] sm:text-xs  px-1.5 py-0.5 sm:px-4 sm:py-1.5 absolute top-2 left-2 rounded ${product?.top === "Hot Sale"
            ? "bg-error-100 !text-white"
            : "bg-primary-100"
            }`}
        />

        <div className="absolute -bottom-20 group-hover:bottom-2 right-2 duration-300 transform ease-in flex flex-col gap-2">
          <Link href={"/"} className="block">
            <Button variant={"outline"} size={"icon"}>
              <Eye size={16} />
            </Button>
          </Link>
          <Button variant={"outline"} size={"icon"}>
            <Heart size={16} />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <GitCompareArrows size={16} />
          </Button>
        </div>
      </div>

      <div className="w-full grid sm:grid-cols-2">
        <Button
          variant={"outline"}
          className="w-full !rounded-none  text-xs px-0 gap-2"
        >
          <ShoppingBag size={16} />
          Buy Now
        </Button>
        <Button
          variant={"outline"}
          className="w-full !rounded-none text-xs px-0 gap-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-3 justify-between mt-1">
        <div className="flex flex-wrap items-center gap-2">
          <MyRating rating={4} />
          <Text variant="gray" className="text-xs">
            (34 Reviews)
          </Text>
        </div>

        <Text variant="gray" className="text-xs">
          241 Sold
        </Text>
      </div>
      <Text variant="gray" className="text-sm my-1">
        {product?.title
          ? product.title
          : "Cool sweater from the greens of new Iceland Cotton"}
      </Text>

      <div className="flex flex-wrap items-center gap-2">
        <Text variant="gray" className="text-sm">
          <del>$ 200.00</del>
        </Text>
        <Text className="text-sm font-medium">$ 99.99</Text>

        <Text className="text-xs font-medium px-3 py-1 rounded-full bg-primary-100">
          25% off
        </Text>
      </div>
    </div>
  );
};

export default PrimaryCard;

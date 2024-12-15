"use client";
import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Text } from "../common/Text";
import { Button } from "../ui/button";
import { ProductDef } from "./PrimaryCard";

const CompareCard = ({ product }: { product: ProductDef }) => {
  return (
    <div className="group w-full flex flex-col gap-2">
      <div className="bg-dark-20 max-h-[294px] relative overflow-hidden">
        <Image
          alt=""
          height={0}
          width={0}
          sizes="100vw"
          src={product?.img ? product.img : "/images/product.svg"}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 ease-in"
        />

        <div className={`absolute top-2 right-2`}>
          <Button size={"icon"} variant={"outline"}>
            <Heart size={16} />
          </Button>
        </div>
      </div>

      <Text
        variant="success"
        className="max-w-max text-xs font-medium px-3 py-1 rounded-full bg-[#128E321A] !text-[#128E32]"
      >
        In Stock
      </Text>

      <Text variant="gray" className="text-sm line-clamp-2">
        {product?.title
          ? product.title
          : "Cool sweater from the greens of new Iceland Cotton"}
      </Text>

      <div className="w-full grid gap-2">
        <Button variant={"primary"} className="w-full  text-xs px-0 gap-2">
          <ShoppingBag size={16} />
          Buy Now
        </Button>
        <Button variant={"outline"} className="w-full text-xs px-0 gap-2">
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
      <article className="flex flex-wrap items-center gap-2">
        <Text variant="gray" className="text-sm">
          <del>$ 200.00</del>
        </Text>
        <Text className="text-sm font-medium">$ 99.99</Text>
      </article>
    </div>
  );
};

export default CompareCard;

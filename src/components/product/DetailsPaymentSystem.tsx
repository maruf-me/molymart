"use client";
import { LockKeyhole, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Text } from "../common/Text";
import InputWithAddSub from "../forms/InputWithAddSub";
import { Button } from "../ui/button";

const DetailsPaymentSystem = () => {
  return (
    <div className="w-full md:max-w-[312px] bg-white max-h-max border border-dark-60 rounded-md">
      <div className="p-3 border-b border-dark-40 space-y-2">
        <Text className="text-sm font-medium" variant="secondary">
          Total Price
        </Text>
        <article className="flex items-end gap-3">
          <Text title="$ 208.00" className="text-2xl font-semibold" />
          <Text
            title="(VAT included)"
            className="text-sm pb-1.5"
            variant="gray"
          />
        </article>
        <Text
          title="In Stock"
          className="max-w-max text-sm border border-[#128E3259] bg-[#128E321A] !text-[#128E32] px-2 py-1 rounded"
        />

        <Text className="text-sm font-medium" variant="gray">
          Estimated Delivery:{" "}
          <span className="text-dark-100">9 Jun - 17 Jun</span>
        </Text>
        <Text className="text-sm font-medium" variant="gray">
          Free Return:{" "}
          <span className="text-dark-100">Within 15 days of purchase</span>
        </Text>
      </div>

      <div className="p-3 space-y-3">
        <div className="flex items-center gap-4">
          <Text className="text-sm font-medium">Quantity</Text>

          <InputWithAddSub />
        </div>

        <Button
          variant={"primary"}
          className="w-full !rounded  text-xs px-0 gap-2"
        >
          <ShoppingBag size={16} />
          Buy Now
        </Button>
        <Button className="w-full !rounded text-xs px-0 gap-2">
          <ShoppingCart size={16} />
          Add to Cart
        </Button>

        <div className="py-1 flex items-center gap-3 justify-center">
          <LockKeyhole size={16} />
          <Text variant="gray" className="text-sm font-medium">
            Secured Payment Guaranteed
          </Text>
        </div>

        <Image
          alt="Visa"
          width={0}
          height={0}
          sizes="100vw"
          src="/images/payments.svg"
          className="max-h-[28px] lg:max-w-[360px] h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default DetailsPaymentSystem;

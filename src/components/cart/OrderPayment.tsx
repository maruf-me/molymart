"use client";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../common/Text";
import { Button } from "../ui/button";

const OrderPayment = () => {
  return (
    <div className="w-full bg-white max-h-max border border-dark-60 rounded-md">
      <div className="p-3 pb-4 border-b mb-2 border-dark-40 space-y-2">
        <Text title="Order" className="text-xl font-semibold" />

        <article className="py-2 space-y-2">
          <Text
            variant="secondary"
            className="text-sm font-medium flex items-center justify-between gap-2"
          >
            <span>Product Name goes here</span>

            <span className="flex max-w-[140px] w-full justify-between gap-3">
              <span>x 2</span>
              <span>$ 134.00</span>
            </span>
          </Text>
          <Text
            variant="secondary"
            className="text-sm font-medium flex items-center justify-between gap-2"
          >
            <span>Product long Name goes here</span>
            <span className="flex max-w-[140px] w-full justify-between gap-3">
              <span>x 2</span>
              <span>$ 134.00</span>
            </span>
          </Text>
          <Text
            variant="secondary"
            className="text-sm font-medium flex items-center justify-between gap-2"
          >
            <span>Product short Name goes here</span>
            <span className="flex max-w-[140px] w-full justify-between gap-3">
              <span>x 2</span>
              <span className="text-dark-60">$ 0.00</span>
            </span>
          </Text>
          <Text
            variant="secondary"
            className="text-sm font-medium flex items-center justify-between gap-2"
          >
            <span>Product so short</span>
            <span className="flex max-w-[140px] w-full justify-between gap-3">
              <span>x 2</span>
              <span>$ 134.00</span>
            </span>
          </Text>
          <Text
            variant="secondary"
            className="text-sm font-medium flex items-center justify-between gap-2"
          >
            <span>Product Name goes here</span>
            <span className="flex max-w-[140px] w-full justify-between gap-3">
              <span>x 2</span>
              <span>$ 134.00</span>
            </span>
          </Text>
          <Text
            variant="secondary"
            className="text-sm font-medium flex items-center justify-between gap-2"
          >
            <span>Shipping</span>
            <span>$ 134.00</span>
          </Text>
          <Text
            variant="secondary"
            className="text-sm font-medium flex items-center justify-between gap-2"
          >
            <span>Coupon offer</span>
            <span>$ 134.00</span>
          </Text>
          <Text
            variant="secondary"
            className="text-sm font-medium flex items-center justify-between gap-2"
          >
            <span>VAT (15%)</span>
            <span>$ 134.00</span>
          </Text>
        </article>
      </div>

      <div className="p-3 space-y-3">
        <article className="flex flex-col items-center gap-2 bg-[#F1F4F0] p-3 rounded-md">
          <Text className="text-base font-medium">Grand Total:</Text>
          <Text className="text-3xl font-semibold">$ 1533.84</Text>
        </article>

        <Link href={"/checkout"} className="block">
          <Button
            variant={"primary"}
            className="w-full !rounded  text-xs px-0 gap-2"
          >
            <ShoppingBag size={16} />
            Proceed to Payment
          </Button>
        </Link>

        <div className="flex flex-col items-center gap-2">
          <Text variant="gray" className="text-sm font-medium">
            Accepted payment methods
          </Text>

          <Image
            alt="Visa"
            width={0}
            height={0}
            sizes="100vw"
            src="/images/payments.svg"
            className="max-h-[28px] max-w-[360px] h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;

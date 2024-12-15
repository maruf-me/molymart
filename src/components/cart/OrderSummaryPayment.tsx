"use client";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../common/Text";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const OrderSummaryPayment = () => {
  return (
    <div className="w-full bg-white max-h-max border border-dark-60 rounded-md">
      <div className="p-3 pb-4 border-b mb-2 border-dark-40 space-y-2">
        <Text title="Order Summary" className="text-xl font-semibold" />

        <article className="py-2 space-y-2">
          <Text
            variant="secondary"
            className="text-sm font-medium flex items-center justify-between gap-2"
          >
            <span>Subtotal</span>
            <span>$ 134.00</span>
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
            <span className="text-dark-60">$ 0.00</span>
          </Text>
          <Text
            variant="secondary"
            className="text-sm font-medium flex items-center justify-between gap-2"
          >
            <span>VAT (15%)</span>
            <span>$ 134.00</span>
          </Text>
        </article>

        <div className="space-y-2">
          <Text className="text-sm font-medium" variant="secondary">
            Have a coupon? Apply here
          </Text>

          <Input
            type="number"
            className="rounded-none"
            placeholder="Coupon code"
          />
        </div>
      </div>

      <div className="p-3 space-y-3">
        <article className="flex items-center justify-between gap-4">
          <Text className="text-base font-medium">Total Amount:</Text>
          <Text className="text-base font-semibold">$ 188.60</Text>
        </article>

        <div className="flex items-center gap-2">
          <Checkbox id="trams" />
          <Label htmlFor="trams" className="text-dark-80 text-sm">
            I have read and agree with the
            <Link
              href={"/#"}
              className={`duration-300 text-dark-90 hover:scale-105 underline pl-1 text-xs`}
            >
              Terms & Conditions
            </Link>
          </Label>
        </div>

        <Link href={"/checkout"} className="block">
          <Button
            variant={"primary"}
            className="w-full !rounded  text-xs px-0 gap-2"
          >
            <ShoppingBag size={16} />
            Proceed to Checkout
          </Button>
        </Link>
        <Button className="w-full !rounded text-xs px-0 gap-2">
          <ShoppingCart size={16} />
          Continue Shopping
        </Button>

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

export default OrderSummaryPayment;

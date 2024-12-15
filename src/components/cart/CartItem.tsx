import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Text } from "../common/Text";
import InputWithAddSub from "../forms/InputWithAddSub";
import { Button } from "../ui/button";

const CartItem = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-6 sm:items-center">
      <div className="sm:w-3/5 flex gap-3 items-center">
        <Button size={"icon"} variant={"transparent"}>
          <Trash2 size={16} />
        </Button>

        <Image
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          src={"/images/product.svg"}
          className="w-full max-w-[108px] object-contain"
        />

        <article className="">
          <Text title="$ 170.00" className="font-semibold text-base mb-1" />
          <Text
            variant="gray"
            className="font-normal text-sm line-clamp-2"
            title="A cool product for people who wants both modern yet formal design and this is a sample"
          />

          <Text
            variant="muted"
            className="font-medium text-sm mt-1"
            title="A cool product for people who wants both modern yet formal design and this is a sample"
          >
            {" "}
            <span className="pr-3">Color: Pink</span>
            <span className="pl-3 border-l border-dark-60">Size: 40</span>
          </Text>
        </article>
      </div>

      <div className="sm:w-2/5 flex items-center justify-between gap-4">
        <div className="w-32">
          <InputWithAddSub />
        </div>

        <Text title="$ 340.00" className="font-medium text-base" />
      </div>
    </div>
  );
};

export default CartItem;

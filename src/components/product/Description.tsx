import Image from "next/image";
import { Text } from "../common/Text";

const Description = () => {
  return (
    <div className="space-y-6">
      <article className="space-y-3">
        <Text variant="secondary" className="text-base sm:text-2xl font-medium">
          Outstanding Features
        </Text>

        <Text variant="gray" className="text-sm my-2">
          The garments labelled as committed are products that have been
          produced using sustainable fibres or processes, reducing their
          environmental impact. Umino’s goal is to support the implementation of
          practices more committed to the environment.
        </Text>
      </article>

      <div className="flex gap-2 md:gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <Image
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              src={"/images/product.svg"}
              style={{ maxWidth: `calc(100vw / 4)` }}
              className="w-full object-contain sm:hidden"
            />
            <Image
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              src={"/images/product.svg"}
              className="max-h-[420px] w-full max-w-[160px] lg:min-w-[260px] object-contain hidden sm:block"
            />
          </div>
        ))}
      </div>

      <article className="space-y-3">
        <Text variant="secondary" className="text-base sm:text-2xl font-medium">
          Washing Instructions
        </Text>

        <Text variant="gray" className="text-sm my-2">
          Machine wash max. <br /> 30ºC. Short spin. <br />
          Iron maximum 110ºC.
          <br />
          Do not bleach/bleach. <br />
          Do not dry clean. <br />
          Tumble dry, medium hear
        </Text>
      </article>
    </div>
  );
};

export default Description;

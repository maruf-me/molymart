import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Image as ImageIcon,
  Plus,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MyRating from "../common/MyRating";
import { Progress } from "../common/Progress";
import { Text } from "../common/Text";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const Reviews = () => {
  const [isUpload, setIsUpload] = useState<boolean>(false);
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-4">
        <section className="w-full lg:w-[320px]">
          <Text title="Product Ratings" className="text-lg font-medium" />

          <div className="py-4">
            <article className="flex items-end gap-3">
              <Text title="4.2" className="text-[40px] font-semibold" />
              <Text title="out of 5" className="text-lg font-medium pb-2" />
            </article>

            <div className="flex flex-wrap items-center gap-2">
              <div className="pb-1.5">
                <MyRating rating={4} />
              </div>
              <Text variant="gray" className="text-xs">
                (34 Reviews)
              </Text>
            </div>
          </div>

          <div className="text-dark-100 space-y-3">
            <div className="flex items-center gap-1">
              <span className="text-sm min-w-max">5 Star</span>
              <Progress
                value={100}
                className="bg-[#F3F3F3]"
                indicatorClassName={"bg-[#FCCA19]"}
              />
              <span className="text-sm">50%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm  min-w-max">5 Star</span>
              <Progress
                value={90}
                className="bg-[#F3F3F3]"
                indicatorClassName={"bg-[#FCCA19]"}
              />
              <span className="text-sm">50%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm  min-w-max">5 Star</span>
              <Progress
                value={80}
                className="bg-[#F3F3F3]"
                indicatorClassName={"bg-[#FCCA19]"}
              />
              <span className="text-sm">50%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm  min-w-max">5 Star</span>
              <Progress
                value={70}
                className="bg-[#F3F3F3]"
                indicatorClassName={"bg-[#FCCA19]"}
              />
              <span className="text-sm">50%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm  min-w-max">5 Star</span>
              <Progress
                value={60}
                className="bg-[#F3F3F3]"
                indicatorClassName={"bg-[#FCCA19]"}
              />
              <span className="text-sm">50%</span>
            </div>
          </div>

          <article className="my-4">
            <Text title="Add your review" className="text-xl font-medium" />
            <Text variant="gray" className="text-sm">
              Share your thoughts with other customers
            </Text>
          </article>

          <Button
            className="w-full text-base items-center gap-2"
            variant={"outline"}
          >
            Please sign in to write a review{" "}
            <ArrowRight size={18} className="pt-0.5" />
          </Button>

          <div className="flex justify-between gap-3 items-center my-5">
            <Text title="Add your review" className="text-sm font-medium" />
            <MyRating rating={0} starClasses="h-6 w-6" />
          </div>

          <div className="space-y-2">
            <Text
              title="Your Review (optional)"
              className="text-sm font-medium"
            />
            <Textarea
              placeholder="Write your experience here.."
              className="h-[200px]"
            />

            {isUpload ? (
              <div className="grid grid-cols-4 gap-2 md:gap-3">
                {Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} onClick={() => setIsUpload(!isUpload)}>
                    <Image
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={"/images/product.svg"}
                      className="w-full max-w-[100px] object-contain rounded-md"
                    />
                  </div>
                ))}
                <Button
                  asChild
                  variant={"secondary"}
                  className="text-base text-dark-80 h-full"
                >
                  <label
                    htmlFor="file"
                    className="flex items-center justify-center aspect-square w-ful"
                  >
                    <Plus size={32} />
                    <input type="file" id="file" className="hidden" />
                  </label>
                </Button>
              </div>
            ) : (
              <div
                onClick={() => setIsUpload(!isUpload)}
                className="border border-dashed border-dark-40 flex gap-1 justify-center bg-dark-20 rounded-md p-4"
              >
                <ImageIcon size={20} color="#7A7A7A" />
                <article className="">
                  <Text
                    title="Upload Images"
                    className="text-sm font-medium"
                    variant="secondary"
                  />
                  <Text
                    variant="muted"
                    className="text-xs"
                    title="Click or drag images here"
                  />
                </article>
              </div>
            )}

            <Text
              variant="gray"
              className="flex justify-between gap-3 items-center text-xs"
            >
              <span>Maximum 6 images</span>
              <span>{"< 5 mb"}</span>
            </Text>

            <Button variant={"primary"} className="rounded-md text-base w-full">
              Submit Review
            </Button>
          </div>
        </section>

        <section>
          <div className="space-y-2">
            <Text title="Review Images" className="text-lg font-medium" />

            <div className="flex items-center gap-2 md:gap-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <Image
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={"/images/product.svg"}
                    className="w-full max-w-[100px] object-contain"
                  />
                </div>
              ))}
              <Button
                variant={"transparent"}
                className="text-base text-dark-80"
              >
                See all <ChevronRight size={16} />
              </Button>
            </div>
          </div>

          <div className="space-y-5 mt-6">
            <Text title="Customer Reviews" className="text-lg font-medium" />

            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex gap-2">
                <div className="min-h-8 min-w-8 max-h-8 max-w-8 md:min-h-12 md:min-w-12 md:max-h-12 md:max-w-12 rounded-full bg-primary-100 flex justify-center items-center text-base md:text-xl text-dark-100 font-semibold">
                  M
                </div>
                <div className="">
                  <Text
                    title="David Cooper"
                    className="text-base font-medium"
                  />
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-2 text-xs text-dark-80">
                      <MyRating rating={4} readonly /> <span>4 Star</span>
                    </div>

                    <li className="text-xs text-dark-80">December 16, 2023</li>
                  </div>

                  <Text className="text-sm mt-3" variant="gray">
                    I recently purchased the Legendary Whitetails Mens Buck Camp
                    Flannel Shirt, and it has quickly become a staple in my
                    wardrobe. I liked it so much that I even got another color
                    to rotate with it. The shirt offers a comfortable and casual
                    look thats perfect.
                  </Text>

                  <div className="flex items-center gap-2 mt-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index}>
                        <Image
                          alt=""
                          width={0}
                          height={0}
                          sizes="100vw"
                          src={"/images/product.svg"}
                          className="w-full max-w-[60px] max-h-[60px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              variant={"transparent"}
              className="text-base gap-2 text-dark-80 mt-3"
            >
              Show more
              <ChevronDown size={16} />
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Reviews;

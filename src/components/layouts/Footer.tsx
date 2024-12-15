"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../common/Text";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-primary-100 py-4 sm:py-8">
        <div className="_container flex flex-col sm:flex-row justify-between items-center gap-4 ">
          <article className="text-center sm:text-start">
            <Text className="text-xl sm:text-2xl font-semibold mb-2">
              Subscribe to our Newsletter
            </Text>
            <Text className="text-xs sm:text-sm">
              For news, offers and so much more! No spam, we promise.
            </Text>
          </article>

          <div className="flex items-center h-[44px] md:max-w-[544px] w-full">
            <Input
              type="email"
              placeholder="Enter email"
              className="rounded-r-none !h-full"
            />
            <Button
              type="submit"
              className="!h-full rounded-l-none bg-black text-white hover:bg-gray-800"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="_container pt-8">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <Image
              src="/images/brand.svg"
              alt="Molymart Logo"
              width={150}
              height={40}
              className="mb-4"
            />
            <Text variant="gray" className="text-sm mb-4 lg:w-2/3">
              Bridging the barrier between customers and business with a
              service-focused experience all around the world.
            </Text>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-dark-80 hover:text-dark-100">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-dark-80 hover:text-dark-100">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-dark-80 hover:text-dark-100">
                <Instagram size={20} />
              </Link>
            </div>

            <Text title="Helpline -" variant="muted" className="text-sm" />
            <div className="flex items-center text-sm py-2">
              <Phone size={20} className="mr-2" />
              <Text className="font-semibold text-xl">(123) 456 789</Text>
            </div>
            <Text className="text-sm">Email: support@molymart.com</Text>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                  >
                    Order Tracking
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                  >
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Others</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                  >
                    Affiliate
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                  >
                    Vouchers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                  >
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                  >
                    Brands
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                >
                  Return & Exchange
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-dark-80 hover:text-dark-100 duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 py-4 border-t border-gray-200">
        <div className="_container flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Text className="text-sm text-center">
            &copy; Molymart. All rights reserved
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
    </footer>
  );
}

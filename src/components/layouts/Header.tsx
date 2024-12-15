"use client";
import { Text } from "@/components/common/Text";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCommonStore } from "@/stores/commonStore";
import { Menu, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import HeaderSearch from "./HeaderSearch";
import { Navbar } from "./Navbar";

export default function Header() {
  const setDrawer = useCommonStore((state) => state.setGlobalDrawer);

  return (
    <>
      {/* Top bar */}
      <div className="_container bg-white py-2 text-sm text-dark-100 flex justify-center md:justify-between items-center">
        <Text className="hidden md:block">
          Free shopping worldwide from orders above $500
        </Text>
        <div className="flex items-center space-x-4">
          <Select defaultValue="en">
            <SelectTrigger className="max-w-max border-0 border-r h-auto py-0 text-xs sm:text-sm">
              <SelectValue placeholder="Eng" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="en">
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/images/eng.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />{" "}
                    Eng
                  </div>
                </SelectItem>
                <SelectItem value="bn">
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/images/eng.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />{" "}
                    Bang
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="max-w-max border-0 border-r h-auto py-0 text-xs sm:text-sm">
              <SelectValue placeholder="USD" defaultValue={"usd"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="bdt">BDT</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Text className="text-xs sm:text-sm">Helpline: (123) 456 789</Text>
        </div>
      </div>
      <header className="sticky top-0 z-40">
        {/* Header */}
        <section className="bg-primary-100 p-4">
          <div className="_container flex flex-col md:flex-row justify-between items-center gap-3">
            <Link href={`/`}>
              <Image
                src="/images/brand.svg"
                alt="Molymart logo"
                width={188}
                height={40}
                className="mr-2"
              />
            </Link>

            <HeaderSearch />

            {/* <div className="flex-grow max-w-xl mx-4">
              <div className="relative">
                <Select>
                  <SelectTrigger className="absolute left-0.5 top-1/2 transform -translate-y-1/2 bg-dark-100 border-r px-2 py-0 h-[90%] max-w-[80px] sm:max-w-[124px] text-white focus:outline-none focus:ring-0 focus:ring-offset-0">
                    <SelectValue
                      placeholder="All Categories"
                      defaultValue={"All"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">All Categories</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <input
                  type="text"
                  placeholder="Search product here..."
                  className="w-full pl-24 sm:pl-32 pr-10 py-2 border border-dark-80 rounded-md focus:outline-none focus:ring focus:ring-primary-100"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div> */}
            <div className="flex items-center space-x-4">
              <Link href={"/"}>
                <Button
                  size={"sm"}
                  variant={"transparent"}
                  className="flex items-center min-w-max p-0"
                >
                  <User className="mr-1 h-4 w-4" />
                  Sign in / up
                </Button>
              </Link>
              <div className="h-[20px] w-[1px] border border-dark-60" />
              <Link href={`/`}>
                <Button
                  size={"sm"}
                  variant={"transparent"}
                  className="flex items-center p-0"
                >
                  <ShoppingCart className="mr-1 h-4 w-4" />0
                  <span className="ml-1">$0.00</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="bg-white border-b border-dark-40 shadow-sm">
          <div className="_container py-2 flex items-center gap-4 justify-between">
            <div className="md:hidden flex items-center gap-4 justify-between w-full">
              <button
                className="flex items-center gap-1"
                onClick={() =>
                  setDrawer({ open: true, header: "Menu", side: "left" })
                }
              >
                <Menu /> Menu
              </button>

              <button>Track Order</button>
            </div>

            <Navbar />

            <ul className="hidden md:flex flex-wrap justify-center md:justify-start space-x-4 text-sm">
              <Link href={"/"}>
                <li className="hover:bg-dark-20 duration-300 px-3 rounded-md">
                  Compare
                </li>
              </Link>
              <li className="px-4 border-x border-dark-40 ">
                <p className="flex items-center gap-1 hover:bg-dark-20 duration-300 px-3 rounded-md">
                  Wishlist
                  <span className="text-white bg-error-100 rounded-full max-h-5 min-w-5 flex items-center justify-center">
                    3
                  </span>
                </p>
              </li>
              <li className="hover:bg-dark-20 duration-300 px-3 rounded-md">
                Track Order
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

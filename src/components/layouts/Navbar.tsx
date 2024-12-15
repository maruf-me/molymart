"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { categories } from "../home/HeroAsideBar";

export function Navbar() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Mega menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`cursor-pointer hover:bg-dark-40 duration-300 px-4 py-[13px] text-dark-100 flex items-center justify-between gap-4 ${index === categories.length - 1
                      ? ""
                      : "border-b border-dark-20"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    {category.icon && (
                      <Image
                        alt=""
                        width={20}
                        height={20}
                        src={category.icon}
                      />
                    )}
                    {category.title}
                    {index === 2 && (
                      <span className="px-2 py-1 bg-primary-100 text-xs rounded">
                        110 + 52
                      </span>
                    )}
                  </div>

                  <ChevronDown className="h-4 w-4 rotate-[270deg]" />
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Shop
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Product
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Page</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`cursor-pointer hover:bg-dark-40 duration-300 px-4 py-[13px] text-dark-100 flex items-center justify-between gap-4 ${index === categories.length - 1
                      ? ""
                      : "border-b border-dark-20"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    {category.icon && (
                      <Image
                        alt=""
                        width={20}
                        height={20}
                        src={category.icon}
                      />
                    )}
                    {category.title}
                    {index === 2 && (
                      <span className="px-2 py-1 bg-primary-100 text-xs rounded">
                        110 + 52
                      </span>
                    )}
                  </div>

                  <ChevronDown className="h-4 w-4 rotate-[270deg]" />
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

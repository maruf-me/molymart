"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const AuthLayoutCom = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const showSignInUnActions =
    pathname === "/auth" || pathname === "/auth/signin";
  return (
    <div className="bg-[#F1F4F0] min-h-screen flex flex-col gap-4 justify-center items-center py-4 px-3">
      <Image
        src="/images/brand.svg"
        alt="Molymart logo"
        width={188}
        height={40}
        className=""
      />
      {showSignInUnActions && (
        <div className="flex gap-3">
          <Link href={"/auth"}>
            <Button
              variant={pathname === "/auth" ? "primary" : "outline"}
              className="rounded-full px-8 text-base font-medium"
            >
              Sign up
            </Button>
          </Link>
          <Link href={"/auth/signin"}>
            <Button
              variant={pathname === "/auth/signin" ? "primary" : "outline"}
              className="rounded-full px-8 text-base font-medium"
            >
              Sign in
            </Button>
          </Link>
        </div>
      )}

      {children}
    </div>
  );
};

export default AuthLayoutCom;
